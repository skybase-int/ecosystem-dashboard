import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import lightTheme from '@ses/styles/theme/light';
import React from 'react';
import FilterTable from '../FiltersTable/FilterTable';
import SectionTitle from '../SectionTitle/SectionTitle';
import type { MultiSelectItem } from '@ses/components/CustomMultiSelect/CustomMultiSelect';

interface Props {
  metrics: MultiSelectItem[];
  activeItems: string[];
  handleSelectChange: (value: string[]) => void;
  handleResetFilter: () => void;
  periodicSelectionFilter: string[];
  handleChange: (value: string) => void;

  selectedValue: string;

  maxItems?: number;
  minItems?: number;
  defaultMetricsWithAllSelected?: string[];
  allowSelectAll?: boolean;
  popupContainerHeight?: number;
}

const BreakdownTableFinances = ({
  activeItems,
  handleChange,
  handleResetFilter,
  handleSelectChange,

  periodicSelectionFilter,
  metrics,
  selectedValue,

  defaultMetricsWithAllSelected,
  maxItems,
  minItems,
  allowSelectAll,
  popupContainerHeight,
}: Props) => {
  const phoneLess = useMediaQuery(lightTheme.breakpoints.down('tablet_768'));

  return (
    <Container>
      <SectionTitle
        title={`${phoneLess ? 'MakerDAO Budget' : 'Breakdown Table'}`}
        tooltip="Adjust the table to display financial data by selecting the time period and types, with a variable column limit based on screen size, all neatly organized by budget/scope with corresponding subtotals."
        hash="breakdown-table"
      />

      <FilterContainer>
        <FilterTable
          maxItems={maxItems}
          minItems={minItems}
          defaultMetricsWithAllSelected={defaultMetricsWithAllSelected}
          activeItems={activeItems}
          metrics={metrics}
          handleSelectChange={handleSelectChange}
          handleResetFilter={handleResetFilter}
          handleChange={handleChange}
          selectedValue={selectedValue}
          periodicSelectionFilter={periodicSelectionFilter}
          allowSelectAll={allowSelectAll}
          popupContainerHeight={popupContainerHeight}
        />
      </FilterContainer>
    </Container>
  );
};

export default BreakdownTableFinances;
const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 26,
  [lightTheme.breakpoints.up('tablet_768')]: {
    gap: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});

const FilterContainer = styled.div({
  height: 34,

  [lightTheme.breakpoints.up('tablet_768')]: {
    height: 48,
  },
});
