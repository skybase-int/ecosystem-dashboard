import { Skeleton, styled } from '@mui/material';
import React from 'react';
import HeaderRowSkeletonTitle from './HeaderRowSkeletonTitle';

export const HeaderRowSkeleton = () => {
  const TwoItemsSkeleton = () => (
    <TwoItemsSkeletonContainer>
      <ItemStyledSkeleton
        variant="rectangular"
        width={61}
        height={10}
        sx={{
          borderRadius: 13.5,
        }}
      />
      <ItemStyledSkeleton
        variant="rectangular"
        width={61}
        height={10}
        sx={{
          borderRadius: 13.5,
        }}
      />
    </TwoItemsSkeletonContainer>
  );

  return (
    <Container>
      <TitleBox>
        <HeaderRowSkeletonTitle />
      </TitleBox>
      <Mobile>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={56}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={56}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={56}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
      </Mobile>

      <Tablet>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={61}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={61}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={61}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={61}
            height={9.62}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
        <ContainerItem>
          <ItemStyledSkeleton
            variant="rectangular"
            width={61}
            height={10.5}
            sx={{
              borderRadius: 13.5,
            }}
          />
        </ContainerItem>
      </Tablet>
      <Desk1024>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
      </Desk1024>
      <Desk1280>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
      </Desk1280>
      <Desk1440>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
        <ContainerItem>
          <TwoItemsSkeleton />
        </ContainerItem>
      </Desk1440>
    </Container>
  );
};

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  padding: '16px 8px',
  borderRadius: 6,
  minHeight: 48,
  overflow: 'hidden',
  alignItems: 'center',
  background: theme.palette.mode === 'light' ? 'rgba(236, 239, 249, 0.50)' : 'rgb(64, 83, 97, 0.30)',
  [theme.breakpoints.up('tablet_768')]: {
    padding: '16px 0px 16px 8px',
  },
  [theme.breakpoints.up('desktop_1024')]: {
    padding: '16px 8px ',
  },
  [theme.breakpoints.up('desktop_1280')]: {
    padding: '8px 8px ',
  },
  [theme.breakpoints.up('desktop_1440')]: {
    padding: '16px 16px ',
  },
}));

const TitleBox = styled('div')(({ theme }) => ({
  minWidth: 76,
  flex: 1 / 4,
  display: 'flex',
  gap: 4,
  flexDirection: 'column',
  [theme.breakpoints.up('tablet_768')]: {
    minWidth: 136,
    flex: 1 / 6,
  },
  [theme.breakpoints.up('desktop_1024')]: {
    minWidth: 142,
  },
  [theme.breakpoints.up('desktop_1280')]: {
    minWidth: 228,
  },
  [theme.breakpoints.up('desktop_1440')]: {
    minWidth: 228,
  },
}));

const ContainerItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  width: 76,

  [theme.breakpoints.up('tablet_768')]: {
    minWidth: 100,
  },
  [theme.breakpoints.up('desktop_1024')]: {
    minWidth: 130,
  },
  [theme.breakpoints.up('desktop_1280')]: {
    minWidth: 180,
  },
  [theme.breakpoints.up('desktop_1440')]: {
    minWidth: 180,
  },
}));

const TwoItemsSkeletonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: 16,
  [theme.breakpoints.up('desktop_1280')]: {
    gap: 32,
  },
}));

const ItemStyledSkeleton = styled(Skeleton)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#D1DEE6' : '#31424E',
}));

const Mobile = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: 3 / 4,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('tablet_768')]: {
    display: 'none',
  },
}));
const Tablet = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('tablet_768', 'desktop_1024')]: {
    display: 'flex',
    flex: 5 / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 'calc(100%-145px)',
  },
}));

const Desk1024 = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('desktop_1024', 'desktop_1280')]: {
    display: 'flex',
    flex: 5 / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 'calc(100%-142px)',
  },
}));

const Desk1280 = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.between('desktop_1280', 'desktop_1440')]: {
    display: 'flex',
    flex: 5 / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 'calc(100%-180px)',
  },
}));
const Desk1440 = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('desktop_1440')]: {
    display: 'flex',
    flex: 5 / 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 'calc(100%-228px)',
  },
}));
