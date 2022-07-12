import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from '../pagination/bread-crumb';
import InsidePagination from '../pagination/InsidePagination';
import TitleNavigationCuAbout from '../title-navigation-cu-about/title-navigation-cu-about';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { filterData, getArrayParam, getStringParam } from '../../../core/utils/filters';
import { useRouter } from 'next/router';
import { CoreUnitDto } from '../../../core/models/dto/core-unit.dto';
import { useCoreUnitSummaryViewModel } from './core-unit-summary.mvvm';

interface CoreUnitSummaryProps {
  trailingAddress?: string[];
}

export const CoreUnitSummary = ({ trailingAddress = [] }: CoreUnitSummaryProps) => {
  const [hiddenTextDescription, setHiddenTextDescription] = useState(true);
  const router = useRouter();
  const query = router.query;
  const code = query.code as string;

  const { data: response } = useCoreUnitSummaryViewModel();

  const data: CoreUnitDto[] = response && response.coreUnits as CoreUnitDto[];
  const filteredStatuses = useMemo(() => getArrayParam('filteredStatuses', router.query), [router.query]);
  const filteredCategories = useMemo(() => getArrayParam('filteredCategories', router.query), [router.query]);
  const searchText = useMemo(() => getStringParam('searchText', router.query), [router.query]);

  const cu = data?.find(cu => cu.code === code);

  const handleScroll = (event: any) => {
    const scrollPosition = event?.target?.scrollingElement?.scrollTop ?? 0;
    setHiddenTextDescription(scrollPosition < 50);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);
  const filteredData = useMemo(() =>
    filterData({
      data,
      filteredStatuses,
      filteredCategories,
      searchText
    }), [data, filteredCategories, filteredStatuses, searchText]);

  const page = useMemo(() => filteredData.findIndex(item => item.code === code) + 1, [code, filteredData]);

  const changeCoreUnitCode = useCallback(
    (direct: -1 | 1) => () => {
      const index = filteredData.findIndex(item => item.code === code);
      const newIndex = index + direct;
      if (newIndex >= 0 && newIndex < filteredData.length) {
        router.push(`${router.route.replace('[code]', filteredData[newIndex].code)}?filteredStatuses=${filteredStatuses}&filteredCategories=${filteredCategories}&searchText=${searchText}`);
      }
    },
    [code, filteredData, router]);

  const descriptionLength = cu?.sentenceDescription?.length || 0;

  return <div style={{
    position: 'sticky',
    top: 63,
    width: '100%',
    backgroundImage: 'url(/assets/img/Subheader.png)',
    backgroundSize: 'cover',
    zIndex: 4,

  }}>
    <NavigationHeader>
      <BreadCrumb count={filteredData.length} breadcrumbs={[cu?.name ?? '', ...trailingAddress]} isCoreUnit />
      <InsidePagination count={filteredData.length} page={page} onClickLeft={changeCoreUnitCode(-1)} onClickRight={changeCoreUnitCode(1)} />
    </NavigationHeader>
    <Wrapper>
      <ContainerTitle descriptionLength={descriptionLength}>
        <TitleNavigationCuAbout coreUnitAbout={cu} />
        {hiddenTextDescription &&
          <div> <Typography fontSize={16} lineHeight='19px' color='#231536' fontFamily={'FT Base, sans-serif'} sx={{
            marginTop: '16px',
            height: '42px',
          }}>{cu?.sentenceDescription || ''}</Typography>
          </div>}
      </ContainerTitle>
    </Wrapper>
    <div style={{
      position: 'relative',
      borderBottom: hiddenTextDescription ? '1px solid #B6EDE7' : 'none',
      width: '100%',
      marginTop: '24px',
    }} />
  </div>;
};

const NavigationHeader = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '74px',
  paddingLeft: '32px',
  paddingRight: '32px',
  marginBottom: '16px'
});

const ContainerTitle = styled.div<{ stateHidden?: boolean, descriptionLength: number }>(({ stateHidden, descriptionLength }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '128px',
  paddingRight: '128px',
  height: stateHidden || descriptionLength < 169 ? '108px' : '130px',
  paddingTop: '8px'
}));

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1440px',
  margin: '0 auto',
});
