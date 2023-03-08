import styled from '@emotion/styled';
import React from 'react';
import { getSSRPropsDefaultAuth } from '../../../../../src/core/utils/commonGetSSRProps';
import ChangePassword from '../../../../../src/stories/containers/AuthChange/ChangePassword/ChangePassword';
import UserManagerLayout from '../../../../../src/stories/containers/Users/UsersManager/UserManagerLayout';
import { ManagerTabs } from '../../../../../src/stories/containers/Users/UsersManager/managerTabsEnum';
import lightTheme from '../../../../../styles/theme/light';
import type { NextPage } from 'next';

const ChangeUserPasswordPage: NextPage = () => (
  <UserManagerLayout tabIndex={ManagerTabs.MANAGER}>
    <Container>
      <ChangePassword adminChange={true} />
    </Container>
  </UserManagerLayout>
);

export default ChangeUserPasswordPage;

export const getServerSideProps = getSSRPropsDefaultAuth;

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  [lightTheme.breakpoints.up('desktop_1440')]: {
    marginTop: 24,
  },
});
