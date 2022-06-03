import React from 'react';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { CuTableColumnLinks } from '../cu-table-column-links/cu-table-column-links';
import { getTwoInitials } from '../../../core/utils/string.utils';
import { ContributorCommitment } from '../../containers/cu-about/cu-about-contributor';
import { getLinksFromContributor } from '../../../core/business-logic/core-unit-about';

interface Props {
  contributorCommitment: ContributorCommitment;
}

const CardInfoMember = ({ contributorCommitment }: Props) => {
  const contributor = contributorCommitment.contributor[0] || [];
  const links = getLinksFromContributor(contributorCommitment);
  return (
    <Box>
      <Card sx={{
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
        borderRadius: '8px',
        backgroundColor: '#F9F9F9',
      }} >

        <CardContent sx={{
          paddingLeft: '16px',
          paddingRight: '16px',
          paddingTop: '16px',
          paddingBottom: '16px',
        }}>
          <CardHeader
            sx={{
              padding: '0px',
            }}
            avatar={!contributor.facilitatorImage
              ? <Avatar sx={{ bgcolor: 'black' }} style={{
                width: '40px',
                height: '40px',
                fontSize: '1rem'
              }}>{getTwoInitials(contributor?.name || 'NM')}</Avatar>
              : <Avatar style={{
                width: '40px',
                height: '40px'
              }} src={contributor.facilitatorImage} />}
            title={<Typography fontSize={20} color='#231536' lineHeight='24px' fontWeight={500}>{contributor.name}</Typography>}
            subheader={<Typography fontSize={14} sx={{
              marginLeft: '6px',
              marginTop: '8px',
              lineHeight: '130%'
            }}>{`forum: @${contributor.forumHandle}`}</Typography>}
          />
          <Typography sx={{
            marginTop: '24px',
            marginBottom: '24px'
          }}>{contributorCommitment.jobTitle}</Typography>

          <CardContentPositionRow>
            <CardContentPositionColumn>
              <Typography color='#C4C4C4' fontSize={12}>Since</Typography>
              <Typography color=' #000000' fontSize={14}>{contributorCommitment.jobTitle}</Typography>
            </CardContentPositionColumn>
            <CardContentPositionColumn>
              <Typography color='#C4C4C4' fontSize={12} sx={{}}>Commitment</Typography>
              <Typography color=' #000000' fontSize={14}>{contributorCommitment.commitment}</Typography>
            </CardContentPositionColumn>
          </CardContentPositionRow>
        </CardContent>
        <Divider light sx={{
          marginTop: '30px',
          marginBottom: '11px',
          color: '#C4C4C4'
        }} variant='fullWidth' />
        <CardLinksFooter><CuTableColumnLinks links={links} width={10} height={10} spacingsRight={22} /></CardLinksFooter>
      </Card>
    </Box >
  );
};

const CardContentPositionRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

});

const CardContentPositionColumn = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const CardLinksFooter = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: '8px',
});

export default CardInfoMember;
