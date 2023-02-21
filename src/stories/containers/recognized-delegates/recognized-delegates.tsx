import styled from '@emotion/styled';
import { Breadcrumbs } from '@ses/components/breadcrumbs/breadcrumbs';
import { CustomPager } from '@ses/components/custom-pager/custom-pager';
import DelegateSummary from '@ses/components/delegate-summary/delegate-summary';
import { Tabs } from '@ses/components/tabs/tabs';
import { useThemeContext } from '@ses/core/context/ThemeContext';
import { useFlagsActive } from '@ses/core/hooks/useFlagsActive';
import { BudgetStatus } from '@ses/core/models/dto/core-unit.dto';
import lightTheme from '@ses/styles/theme/light';
import React from 'react';
import ExpenseReportStatusIndicator from '../transparency-report/common/expense-report-status-indicator/expense-report-status-indicator';
import { TransparencyActuals2 } from '../transparency-report/transparency-actuals/transparency-actuals-2';
import { TransparencyForecast2 } from '../transparency-report/transparency-forecast/transparency-forecast-2';
import { ParenthesisNumber } from '../transparency-report/transparency-report';
import { TRANSPARENCY_IDS_ENUM } from '../transparency-report/transparency-report.mvvm';
import useRecognizedDelegates from './useRecognizedDelegates.mvvm';

const RecognizedDelegatesContainer = () => {
  const [isEnabled] = useFlagsActive();
  const {
    links,
    itemsBreadcrumb,
    isMobile,
    currentMonth,
    lastUpdateForBudgetStatement,
    hasNewComments,
    numbersComments,
    tabItems,
    tabsIndexNumber,
    tabsIndex,
  } = useRecognizedDelegates();
  const { isLight } = useThemeContext();
  if (isEnabled('FEATURE_TRANSPARENCY_COMMENTS')) {
    const CommentsComponent = {
      item: (
        <CommentsContainer>
          {hasNewComments && <DotIndicator isLight={isLight} />}
          <ParenthesisNumber>
            Comments<span>{`(${numbersComments})`}</span>
          </ParenthesisNumber>
        </CommentsContainer>
      ),
      id: TRANSPARENCY_IDS_ENUM.COMMENTS,
    };
    tabItems.push(CommentsComponent);
  }

  return (
    <Container>
      <ContainerBreadCrumb>
        <StyledBreadcrumbs
          className="crumb-container"
          paddingBreadcrumbs="9px 8px"
          width={isMobile ? 5 : 10}
          height={isMobile ? 10 : 20}
          fontSize="11px"
          items={itemsBreadcrumb}
          borderRadius="6px"
          marginLeft="4px"
          marginRight="6px"
          isLight={isLight}
        />
      </ContainerBreadCrumb>
      <ContainerInside>
        <ContainerDelegateSummary>
          <DelegateSummary links={links} />
        </ContainerDelegateSummary>
      </ContainerInside>
      <Line />
      <ContainerInside>
        <ContainerPagerBar>
          <PagerBar className="no-select" ref={null}>
            <PagerBarLeft>
              <StyledPagerBar
                className="styledPagerBar"
                // width={5}
                // height={10}
                label={currentMonth.toFormat('MMM yyyy').toUpperCase()}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onPrev={() => {}}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onNext={() => {}}
                hasNext={false}
                hasPrevious={false}
              />
              <ContainerExpense>
                <ExpenseReportStatusIndicator budgetStatus={BudgetStatus.Review} showCTA={true} />
              </ContainerExpense>
            </PagerBarLeft>

            <Spacer />
            {lastUpdateForBudgetStatement && (
              <LastUpdate>
                <Since isLight={isLight}>Last Update</Since>
                <SinceDate>{lastUpdateForBudgetStatement.setZone('UTC').toFormat('dd-LLL-y HH:mm ZZZZ')}</SinceDate>
              </LastUpdate>
            )}
          </PagerBar>
        </ContainerPagerBar>
        <ContainerTabs>
          <Tabs
            items={tabItems}
            currentIndex={tabsIndexNumber}
            style={{
              margin: '32px 0',
            }}
          />
          {tabsIndex === TRANSPARENCY_IDS_ENUM.ACTUALS && (
            <TransparencyActuals2 code={'SES'} currentMonth={currentMonth} budgetStatements={[]} longCode={'SES-001'} />
          )}
          {tabsIndex === TRANSPARENCY_IDS_ENUM.FORECAST && (
            <TransparencyForecast2
              currentMonth={currentMonth}
              budgetStatements={[]}
              code={'SES'}
              longCode={'SES-001'}
            />
          )}
        </ContainerTabs>

        <div>Sep 2022 Totals (Sectios)</div>
        <div>Sep 2022 Breakdown (Sectios)</div>
        <ContainerAdditionalNotes>Sep 2022 Breakdown (Sectios)</ContainerAdditionalNotes>
      </ContainerInside>
    </Container>
  );
};

export default RecognizedDelegatesContainer;

const CommentsContainer = styled.div({
  position: 'relative',
});

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  marginTop: 64,
});

const ContainerInside = styled.div({
  width: '343px',
  display: 'flex',
  margin: '0px auto',
  flexDirection: 'column',
  [lightTheme.breakpoints.up('table_834')]: {
    minWidth: '770px',
    margin: '0px auto',
    // marginTop: 23,
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    minWidth: '1130px',
    margin: '0px auto',
    // marginTop: 23,
  },
  [lightTheme.breakpoints.up('desktop_1280')]: {
    minWidth: '1184px',
    margin: '0px auto',
    // marginTop: 23,
  },
  [lightTheme.breakpoints.up('desktop_1440')]: {
    minWidth: '1312px',
    margin: '0px auto',
    // marginTop: 23,
  },
});

const ContainerPagerBar = styled.div({
  marginBottom: 32,
});

const ContainerDelegateSummary = styled.div({
  marginTop: 10,
});

const Line = styled.div({
  borderBottom: '1px solid #B6EDE7',
  width: '100%',
  marginTop: '16px',
  marginBottom: 24,

  [lightTheme.breakpoints.between('table_834', 'desktop_1194')]: {
    marginBottom: 37,
    marginTop: '24px',
  },
  [lightTheme.breakpoints.up('desktop_1194')]: {
    marginBottom: 32,
    marginTop: '24px',
  },
});

const StyledBreadcrumbs = styled(Breadcrumbs)<{ isLight: boolean }>(({ isLight }) => ({
  maxWidth: '343px',
  height: 32,
  margin: '0px auto',
  background: isLight ? '#ECF1F3' : '#000A13',
  '&.crumb-container': {
    [lightTheme.breakpoints.between('table_375', 'table_834')]: {
      '& .crumb': {
        lineHeight: '13px',
      },
    },
    lineHeight: '13px',
    [lightTheme.breakpoints.up('desktop_1280')]: {
      '& .crumb': {
        fontSize: '16px',
        lineHeight: '22px',
        marginRight: 15,
        marginLeft: 15,
      },
    },

    [lightTheme.breakpoints.up('desktop_1440')]: {
      background: 'none',
      maxWidth: '1376px',
      padding: 0,
      marginTop: 5,

      '& .crumb': {
        fontSize: '16px',
        lineHeight: '22px',
        marginRight: 15,
        marginLeft: 0,
        ':last-child': {
          marginLeft: 15,
        },
      },
    },
  },
}));

const ContainerBreadCrumb = styled.div({
  display: 'flex',
  paddingTop: 16,
  paddingLeft: 16,
  paddingRight: 16,
  paddingBottom: 8,
  [lightTheme.breakpoints.up('desktop_1440')]: {
    paddingLeft: 32,
    paddingRight: 32,
    height: 74,
  },
});

const StyledPagerBar = styled(CustomPager)({
  '&.styledPagerBar': {
    'div:first-of-type': {
      gap: 24,
    },
    '> div:last-of-type': {
      marginLeft: 8,
      letterSpacing: 0,
    },
  },
});

const PagerBar = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flex: 1,
  marginTop: -2,
  '@media (min-width: 834px)': {
    alignItems: 'center',
  },
});

const PagerBarLeft = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',

  [lightTheme.breakpoints.up('table_834')]: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Spacer = styled.div({
  flex: '1',
});

const LastUpdate = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  fontFamily: 'Inter, sans-serif',
});

const Since = styled.div<{ isLight: boolean }>(({ isLight = true }) => ({
  color: isLight ? '#231536' : '#D2D4EF',
  fontSize: '11px',
  lineHeight: '15px',
  fontFamily: 'Inter, sans-serif',
  fontStyle: 'normal',
  fontWeight: 600,
  letterSpacing: '0px',
  textTransform: 'uppercase',
  '@media (min-width: 834px)': {
    fontSize: '12px',
  },
}));

const SinceDate = styled.div({
  color: '#708390',
  fontFamily: 'Inter, sans-serif',
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '0px',
  lineHeight: '15px',
  textTransform: 'uppercase',
  marginTop: '2px',
  textAlign: 'right',
  '@media (min-width: 834px)': {
    fontSize: '12px',
    marginTop: '4px',
  },
});

const DotIndicator = styled.span<{ isLight: boolean }>(({ isLight }) => ({
  minWidth: '6px',
  minHeight: '6px',
  borderRadius: '50%',
  background: isLight ? '#F75524' : '#FF8237',
  position: 'absolute',
  top: 0,
  right: -8,
}));

const ContainerTabs = styled.div({});

const ContainerExpense = styled.div({
  marginTop: -2,
  'div a': {
    marginLeft: 4,
  },
});

const ContainerAdditionalNotes = styled.div({
  marginTop: 42,
});
