import React from 'react';
import styled from '@emotion/styled';
import WWW from '../svg/www';
import Forum from '../svg/forum';
import Discord from '../svg/discord';
import Youtube from '../svg/youtube';
import Twitter from '../svg/twitter';
import LinkedIn from '../svg/linkedin';
import Gmail from '../svg/gmail';
import { Box } from '@mui/material';
import { LinkTypeEnum } from '../../../core/enums/link-type.enum';
import { ColumnLinksSkeleton } from './cu-table-column-links-skeleton';
import { useThemeContext } from '../../../core/context/ThemeContext';

export interface LinkModel {
  href: string;
  linkType: LinkTypeEnum;
}

interface CuTableColumnLinksProps {
  links?: LinkModel[];
  width?: number;
  height?: number;
  spacings?: number;
  fill?: string;
  fillDark?: string;
  lastChild?: boolean;
  align?: 'flex-start' | 'center' | 'flex-end';
  isLoading?: boolean;
}

const getImageForLink = (
  link: LinkModel,
  fill: string,
  width?: number,
  height?: number,
  fillDark?: string
) => {
  switch (link.linkType) {
    case LinkTypeEnum.WWW:
      return (
        <WWW fill={fill} width={width} height={height} fillDark={fillDark} />
      );
    case LinkTypeEnum.Forum:
      return (
        <Forum fill={fill} width={width} height={height} fillDark={fillDark} />
      );
    case LinkTypeEnum.Discord:
      return (
        <Discord
          fill={fill}
          width={width}
          height={height}
          fillDark={fillDark}
        />
      );
    case LinkTypeEnum.Twitter:
      return (
        <Twitter
          fill={fill}
          width={width}
          height={height}
          fillDark={fillDark}
        />
      );
    case LinkTypeEnum.Youtube:
      return (
        <Youtube
          fill={fill}
          width={width}
          height={height}
          fillDark={fillDark}
        />
      );
    case LinkTypeEnum.LinkedIn:
      return (
        <LinkedIn
          fill={fill}
          width={width}
          height={height}
          fillDark={fillDark}
        />
      );
    case LinkTypeEnum.Gmail:
      return (
        <Gmail fill={fill} width={width} height={height} fillDark={fillDark} />
      );
    default:
      return <WWW />;
  }
};

export const CuTableColumnLinks = ({
  width,
  height,
  links,
  align = 'flex-end',
  spacings,
  fill = '#C4C4C4',
  lastChild = false,
  fillDark,
  isLoading = false,
}: CuTableColumnLinksProps) => {
  const isLight = useThemeContext().themeMode === 'light';
  return !isLoading
    ? (
      <Container spacings={spacings} align={align}>
        {links?.map((link, i) => (
          <StyleBox lastChild={lastChild} key={`link-${i}`}>
            <LinkImage
                href={link.href}
                target="_blank"
                width={width}
                height={height}
                isLight={isLight}
                onClick={(event: React.SyntheticEvent) => event.stopPropagation()}
              >
                {getImageForLink(link, fill, width, height, fillDark)}
              </LinkImage>
          </StyleBox>
        ))}
      </Container>
      )
    : (
      <ColumnLinksSkeleton />
      );
};

const Container = styled.div<{ spacings?: number; align: string }>(
  ({ spacings, align }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: align,
    gap: `${spacings ?? 0}px`,
  })
);

type StickyLinkProps = {
  width?: number;
  height?: number;
  isLight?: boolean;
};

const LinkImage = styled.a(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ({ width = 32, height = 32, isLight = true }: StickyLinkProps) => ({
    width,
    height,
    '&:hover svg path': {
      fill: isLight ? '#231536' : 'white'
    }
  })
);

const StyleBox = styled(Box)<{ lastChild?: boolean }>((props) => ({
  '&:last-child': props.lastChild && {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 19,
    height: 19,
  },
}));
