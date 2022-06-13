import React, { ReactNode } from 'react';
import Logo from '../../svg/logo';
import MakerBurn from '../../svg/maker-burn';
import Makerdao from '../../svg/makerdao';
import MipsPortal from '../../svg/mips-portal';
import VotingPortal from '../../svg/voting-portal';

export type WebSiteLinks = {
  title?: string
  logo: ReactNode | JSX.Element
  background?: string
  fontSize?: number | string
  color?: string
  fontWeight?: number
  link: string
  marginTop?: string
  marginBottom?: string
  fontFamily?: string
  lineHeight?: number | string
  padding?: string
  subtract?: ReactNode | JSX.Element,
  id: string
}

export const itemsWebSiteLinks: WebSiteLinks[] = [
  {
    logo: <Logo />,
    background: '#231635',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 700,
    color: '#FFFFFF',
    link: 'https://vote.makerdao.com/',
    marginTop: '32px',
    marginBottom: '32px',
    fontFamily: 'SF Pro Display, sans-serif',
    padding: '4px 8px',
    subtract: <VotingPortal />,
    id: 'Voting Portal',

  },
  {
    title: 'Forum',
    logo: <Makerdao />,
    fontSize: 24,
    fontWeight: 400,
    color: '#1AAB9B',
    link: 'https://forum.makerdao.com/',
    marginBottom: '32px',
    fontFamily: 'SF Pro Display, sans-serif',
    id: 'Forum',
  },
  {
    logo: <Logo fill='#1AAB9B' />,
    background: '#1AAB9B',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '19px',
    color: '#FFFFFF',
    link: 'https://mips.makerdao.com/',
    marginBottom: '32px',
    fontFamily: 'Roboto , sans-serif',
    padding: '4px 12px',
    subtract: <MipsPortal />,
    id: 'MIPs Portal',
  },
  {
    title: 'makerburn.com',
    logo: <MakerBurn />,
    color: '#000000',
    fontFamily: 'Cantarell,sans-serif',
    lineHeight: 26,
    fontSize: 18,
    fontWeight: 500,
    link: 'https://makerburn.com/#/',
    marginBottom: '32px',
    id: 'MakerBurn',
  }
];
