import styled from '@emotion/styled';
import { useMediaQuery } from '@mui/material';
import { calculateValuesByBreakpoint } from '@ses/containers/Finances/utils/utils';
import { useThemeContext } from '@ses/core/context/ThemeContext';

import lightTheme from '@ses/styles/theme/light';
import ReactECharts from 'echarts-for-react';
import React, { useRef } from 'react';
import type { DoughnutSeries } from '@ses/core/models/interfaces/doughnutSeries';
import type { WithIsLight } from '@ses/core/utils/typesHelpers';
import type { EChartsOption } from 'echarts-for-react';

interface Props {
  doughnutSeriesData: DoughnutSeries[];
  className?: string;
  isCoreThirdLevel?: boolean;
}

const DoughnutChartFinances: React.FC<Props> = ({ doughnutSeriesData, className, isCoreThirdLevel = true }) => {
  const chartRef = useRef<EChartsOption | null>(null);
  const { isLight } = useThemeContext();
  const isTable = useMediaQuery(lightTheme.breakpoints.between('tablet_768', 'desktop_1024'));
  const isDesktop1024 = useMediaQuery(lightTheme.breakpoints.between('desktop_1024', 'desktop_1280'));
  const isDesktop1280 = useMediaQuery(lightTheme.breakpoints.between('desktop_1280', 'desktop_1440'));
  const isDesktop1440 = useMediaQuery(lightTheme.breakpoints.up('desktop_1440'));

  const { center, radius } = calculateValuesByBreakpoint(isTable, isDesktop1024, isDesktop1280, isDesktop1440);

  const options = {
    color: doughnutSeriesData.map((data) => data.color),
    tooltip: {
      show: true,
      trigger: 'item',
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        width: 40,
      },
      padding: 0,
      borderWidth: 2,
      formatter: function (params: DoughnutSeries) {
        const index = doughnutSeriesData.findIndex((data) => data.name === params.name);
        const itemRender = doughnutSeriesData[index];
        const customTooltip = `
        <div style="background-color:${
          isLight ? '#fff' : '#000A13'
        };padding:16px;minWidth:194px;overflow:auto;border-radius:3px;">
          <div style="margin-bottom:4px;color:${isLight ? '#000' : '#EDEFFF'};">${itemRender.percent} %</div>
          <div style="margin-bottom:16px;color:${isLight ? '#000' : '#EDEFFF'};">${itemRender.name}</div>
          <div style="display:flex;flex-direction:row;gap:20px">
              <div style="display:flex;flex-direction:column">
                <div style="margin-bottom:4;color:${isLight ? '#000' : '#EDEFFF'};">${itemRender.actuals.toLocaleString(
          'es-US'
        )}</div>
                <div style="font-weight:bold;color:${isLight ? '#231536' : '#9FAFB9'};">Actuals</div>
             </div>
              <div style="display:flex;flex-direction:column">
                <div style="margin-bottom:4;color:${
                  isLight ? '#000' : '#EDEFFF'
                };">${itemRender.budgetCap.toLocaleString('es-US')}</div>
                <div style="font-weight:bold;color:${isLight ? '#231536' : '#9FAFB9'};">Budget Cap</div>
             </div>
          </div>
        </div>
        `;

        return customTooltip;
      },
    },

    series: [
      {
        name: 'Overview Card',
        type: 'pie',
        radius,
        center,
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: doughnutSeriesData,
      },
    ],
  };

  const onLegendItemHover = (legendName: string) => {
    const dataIndex = doughnutSeriesData.findIndex((data) => data.name === legendName);

    if (dataIndex !== -1) {
      const chartInstance = chartRef.current.getEchartsInstance();

      chartInstance.dispatchAction({
        type: 'highlight',
        name: legendName,
        seriesIndex: 0,
      });

      chartInstance.dispatchAction({
        type: 'showTip',
        name: legendName,
        seriesIndex: 0,
      });
    }
  };

  const onLegendItemLeave = (legendName: string) => {
    const chartInstance = chartRef.current.getEchartsInstance();
    chartInstance.dispatchAction({
      type: 'downplay',
      name: legendName,
    });
    chartInstance.dispatchAction({
      type: 'hideTip',
    });
  };

  return (
    <Container className={className}>
      <ContainerChart>
        <ReactECharts
          ref={chartRef}
          className="chart-container"
          option={options}
          style={{
            height: '100%',
            width: '100%',
          }}
          opts={{ renderer: 'svg' }}
        />
      </ContainerChart>
      <ContainerLegend isCoreThirdLevel={isCoreThirdLevel}>
        {doughnutSeriesData.map((data, index: number) => (
          <LegendItem
            isCoreThirdLevel={isCoreThirdLevel}
            isLight={isLight}
            key={index}
            onClick={() => console.log('console', data.name)}
            onMouseEnter={() => onLegendItemHover(data.name)}
            onMouseLeave={() => onLegendItemLeave(data.name)}
          >
            <IconWithName>
              <LegendIcon backgroundColor={data.color} />
              <NameOrCode isLight={isLight} isCoreThirdLevel={isCoreThirdLevel}>
                {isCoreThirdLevel ? data.code : data.name}
              </NameOrCode>
            </IconWithName>
            <Value isLight={isLight} isCoreThirdLevel={isCoreThirdLevel}>
              {data.value?.toLocaleString('es-US')}
              <span>DAI</span>
              <span>{`(${data.percent}%)`}</span>
            </Value>
          </LegendItem>
        ))}
      </ContainerLegend>
    </Container>
  );
};
export default DoughnutChartFinances;

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: 64,
});

const ContainerChart = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  [lightTheme.breakpoints.up('tablet_768')]: {
    width: 392,
  },

  [lightTheme.breakpoints.up('desktop_1024')]: {
    width: 420,
    marginLeft: 0,
    marginRight: 22,
  },
  [lightTheme.breakpoints.up('desktop_1280')]: {
    height: 210,
    width: 440,
    marginRight: 0,
  },

  [lightTheme.breakpoints.up('desktop_1440')]: {
    width: 210,
  },
});

const LegendIcon = styled.div<{ backgroundColor: string }>(({ backgroundColor }) => ({
  backgroundColor,
  width: 8,
  height: 8,
  borderRadius: '50%',
}));
const LegendItem = styled.div<WithIsLight & { isCoreThirdLevel: boolean }>(({ isLight, isCoreThirdLevel }) => ({
  display: 'flex',
  flexDirection: isCoreThirdLevel ? 'row' : 'column',
  gap: isCoreThirdLevel ? 4 : 8,
  fontSize: 12,
  fontFamily: 'Inter, sans-serif',
  color: isLight ? '#43435' : '#EDEFFF',
  cursor: 'pointer',
}));
const Value = styled.div<WithIsLight & { isCoreThirdLevel: boolean }>(({ isLight, isCoreThirdLevel }) => ({
  color: isLight ? '#9FAFB9' : '#546978',
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  marginLeft: isCoreThirdLevel ? 4 : 16,
  '& span': {
    marginLeft: 4,
  },
}));

const ContainerLegend = styled.div<{ isCoreThirdLevel: boolean }>(({ isCoreThirdLevel }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: isCoreThirdLevel ? 16 : 8,
  maxWidth: '100%',
  maxHeight: '230px',
  overflow: 'hidden',
}));

const IconWithName = styled.div({
  display: 'flex',
  flexDirection: 'row',
  gap: 6,
  alignItems: 'center',
});

const NameOrCode = styled.div<WithIsLight & { isCoreThirdLevel: boolean }>(({ isLight, isCoreThirdLevel }) => ({
  color: isLight ? (isCoreThirdLevel ? '#708390' : '#434358') : 'red',
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
}));
