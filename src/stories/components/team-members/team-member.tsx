import React from 'react';
import styled from '@emotion/styled';
import { CustomPopover } from '../custom-popover/custom-popover';
import { useThemeContext } from '../../../core/context/ThemeContext';
import lightTheme from '../../../../styles/theme/light';
import { Typography } from '@mui/material';

interface Props {
  fte: number;
}

const TeamMember = ({ fte }: Props) => {
  const { isLight } = useThemeContext();
  return (
    <Container>
      <CustomPopover
        title={'Full-Time Equivalents'}
        id={'popover-fulltime equivalent'}
        popupStyle={{
          color: isLight ? '#231536' : '#D2D4EF',
        }}
      >
        <Data>
          <ContainerRow>
            {' '}
            <StyleTypography isLight={isLight}>{fte}</StyleTypography>{' '}
          </ContainerRow>
          <Title isLight={isLight}>FTEs</Title>
        </Data>
      </CustomPopover>
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  fontWeight: 400,
  cursor: 'pointer',
});

const StyleTypography = styled(Typography, { shouldForwardProp: (prop) => prop !== 'isLight' })<{ isLight: boolean }>(
  ({ isLight }) => ({
    fontStyle: 'normal',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800,
    fontSize: '20px',
    lineHeight: '24px',
    color: isLight ? '#231536' : '#D2D4EF',
    [lightTheme.breakpoints.between('table_375', 'table_834')]: {
      fontFamily: 'Inter, sans-serif',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '24px',
      letterSpacing: '0.4px',
    },
  })
);

const Title = styled(Typography, { shouldForwardProp: (prop) => prop !== 'isLight' })<{ isLight: boolean }>(
  ({ isLight }) => ({
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '20px',
    lineHeight: '24px',
    color: isLight ? '#231536' : '#D2D4EF',
    marginLeft: '8px',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.4px',
    [lightTheme.breakpoints.down('table_834')]: {
      fontSize: '16px',
      linHeight: '19px',
      fontWeight: 700,
    },
  })
);

const Data = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const ContainerRow = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '4px 8px',
  borderRadius: '6px',
});

export default TeamMember;
