import React from 'react';
import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

export const ColumnSummarySkeleton = () => {
  return (
    <ContainerSkeleton>
      <Skeleton
        variant="circular"
        width={56}
        height={56}
        style={{
          marginRight: '11px',
          background: '#ECF1F3'
        }}
      />
      <div>
        <Skeleton
          variant="rectangular"
          width={244}
          height={28}
          style={{
            borderRadius: '8px',
            marginBottom: '8px',
            background: '#ECF1F3',
          }}
        />
        <Row>
          <Skeleton
            variant="rectangular"
            width={66}
            height={18}
            style={{
              borderRadius: '4px',
              marginRight: '4px',
              background: '#ECF1F3',
            }}
          />
          <Skeleton
            variant="rectangular"
            width={174}
            height={18}
            style={{
              borderRadius: '4px',
              background: '#ECF1F3'
            }}
          />
        </Row>
      </div>
    </ContainerSkeleton>
  );
};

const ContainerSkeleton = styled.div({
  display: 'flex',
  padding: '21px 0',
  '@media (min-width: 834px)': {
    padding: '21px 22px 21px 13px',
  },
});

const Row = styled.div({
  display: 'flex',
});
