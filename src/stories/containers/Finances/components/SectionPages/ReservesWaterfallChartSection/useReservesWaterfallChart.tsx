import { useMediaQuery } from '@mui/material';
import { fetchAnalytics } from '@ses/containers/Finances/api/queries';
import { formatBudgetName } from '@ses/containers/Finances/utils/utils';
import { useThemeContext } from '@ses/core/context/ThemeContext';
import lightTheme from '@ses/styles/theme/light';
import sortBy from 'lodash/sortBy';
import { useEffect, useMemo, useState } from 'react';
import useSWRImmutable from 'swr/immutable';
import {
  builderWaterfallSeries,
  calculateAccumulatedArray,
  generateLineSeries,
  getAnalyticForWaterfall,
  processDataForWaterfall,
  sumValuesFromMapKeys,
} from './utils';

import type { MultiSelectItem } from '@ses/components/CustomMultiSelect/CustomMultiSelect';
import type { LegendItemsWaterfall } from '@ses/containers/Finances/utils/types';
import type { AnalyticGranularity } from '@ses/core/models/interfaces/analytic';
import type { Budget } from '@ses/core/models/interfaces/budget';

export const useReservesWaterfallChart = (codePath: string, budgets: Budget[], allBudgets: Budget[], year: string) => {
  const [selectedGranularity, setSelectedGranularity] = useState<AnalyticGranularity>('monthly');

  const levelOfDetail = codePath.split('/').length + 1;
  // fetch actual data from the API
  const { data: analytics, isLoading } = useSWRImmutable(
    [selectedGranularity, year, codePath, levelOfDetail],
    async () => fetchAnalytics(selectedGranularity, year, codePath, levelOfDetail)
  );

  const { summaryValues, totalToStart } = useMemo(
    () => getAnalyticForWaterfall(budgets, selectedGranularity, analytics),
    [budgets, analytics, selectedGranularity]
  );
  const selectAll = useMemo(() => Array.from(summaryValues.keys()), [summaryValues]);

  const [activeElements, setActiveElements] = useState<string[]>(selectAll);
  const { isLight } = useThemeContext();

  const isMobile = useMediaQuery(lightTheme.breakpoints.down('tablet_768'));
  const isTable = useMediaQuery(lightTheme.breakpoints.between('tablet_768', 'desktop_1024'));

  // This to catch some analitys that don't have budgets
  const combinedElementsFromAnalytics = useMemo(() => {
    const newElements = selectAll
      .filter((selectAllPath) => !budgets.some((budget) => budget.codePath === selectAllPath))
      .map((element) => ({
        name: element,
        codePath: element,
        image: '',
      }));

    const combinedArray = [...budgets, ...newElements];
    return combinedArray;
  }, [budgets, selectAll]);
  useEffect(() => {
    setActiveElements(selectAll);
  }, [selectAll]);

  const handleSelectChange = (value: string[]) => {
    setActiveElements(value);
  };
  const handleResetFilter = () => {
    setActiveElements([]);
    setSelectedGranularity('monthly');
  };

  const handleGranularityChange = (value: AnalyticGranularity) => {
    setActiveElements(activeElements);
    setSelectedGranularity(value);
  };
  const defaultTitle = 'MakerDAO Finances';

  const levelBudget = allBudgets?.find((budget) => budget.codePath === codePath);
  const getTitleLevelBudget = formatBudgetName(levelBudget?.name || '');

  const valuesToShow = sumValuesFromMapKeys(summaryValues, activeElements, selectedGranularity);

  const dataReady = processDataForWaterfall(valuesToShow, totalToStart);

  const series = builderWaterfallSeries(dataReady, isMobile, isTable, isLight);

  const valuesLine = useMemo(() => calculateAccumulatedArray(dataReady), [dataReady]);
  const linesChart = useMemo(() => generateLineSeries(valuesLine, isLight), [isLight, valuesLine]);

  series.push(...linesChart);

  const titleChart = getTitleLevelBudget === '' ? defaultTitle : getTitleLevelBudget;

  const legendItems: LegendItemsWaterfall[] = [
    {
      title: 'Reserves Balance',
      color: isLight ? '#83A7FF' : '#447AFB',
    },
    {
      title: 'Outflow',
      color: isLight ? '#CB3A0D' : '#A83815',
    },
    {
      title: 'Inflow',
      color: isLight ? '#2DC1B1' : '#1AAB9B',
    },
  ];

  const items = useMemo(
    () =>
      sortBy(combinedElementsFromAnalytics, (subBudget) => subBudget.name).map((budget) => ({
        id: budget.codePath,
        content: formatBudgetName(budget.name),
        count: 0,
        params: {
          url: budget.image,
        },
      })) as MultiSelectItem[],
    [combinedElementsFromAnalytics]
  );

  const popupContainerHeight =
    budgets.length === 1 ? 100 : budgets.length === 2 ? 130 : budgets.length === 3 ? 150 : 180;

  const isDisabled = activeElements.length === selectAll.length && selectedGranularity === 'monthly';
  return {
    titleChart,
    legendItems,
    selectedGranularity,
    handleGranularityChange,
    series,
    items,
    popupContainerHeight,
    handleResetFilter,
    activeElements,
    handleSelectChange,
    isLoading,
    isDisabled,
  };
};
