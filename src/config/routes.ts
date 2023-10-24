import { featureFlags } from '../../feature-flags/feature-flags';
import { CURRENT_ENVIRONMENT } from './endpoints';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://expenses.makerdao.network';

export const siteRoutes = {
  home: '/',
  ecosystemActors: '/ecosystem-actors',
  ecosystemActorAbout: (code: string) => `/ecosystem-actors/${code}`,
  ecosystemActorReports: (code: string) => `/ecosystem-actors/${code}/finances/reports`,
  ecosystemActorProjects: (code: string) => `/ecosystem-actors/${code}/projects`,
  coreUnitsOverview: featureFlags[CURRENT_ENVIRONMENT].FEATURE_FINANCES_OVERVIEW ? '/core-units' : '/',
  financesOverview: '/',
  newFinancesOverview: '/finances',
  coreUnitAbout: (shortCode: string) => `/core-unit/${shortCode}`,
  coreUnitReports: (shortCode: string) => `/core-unit/${shortCode}/finances/reports`,
  coreUnitActivityFeed: (shortCode: string) => `/core-unit/${shortCode}/activity-feed`,
  globalActivityFeed: '/activity-feed',
  cookiesPolicy: '/cookies-policy',
  recognizedDelegateReport: '/recognized-delegates/finances/reports',
  recognizedDelegate: '/delegates',
  endgame: '/endgame',
  endgameAtlasBudget: 'finances/endgame-atlas-budget',
  endgameScopeBudget: 'finaces/endgame-scope-budget',
  makerDAOLegacyBudget: 'finaces/makerDAO-legacy-budget',

  // auth
  login: '/login',
  manageAccounts: '/auth/manage/accounts',
  adminProfile: '/auth/manage/my-profile',
  userProfile: '/auth/user-profile',
  // TODO: add the accounts routes
};
