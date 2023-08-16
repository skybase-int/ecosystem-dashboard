import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';
import KeyChangeSection from '../../KeyChangeSection/KeyChangeSection';
import { SectionContainer } from '../KeyChangesSections';
import GovernanceSection from './GovernanceSection';
import type { ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Endgame/Governance Section',
  component: GovernanceSection,
  parameters: {
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440],
      pauseAnimationAtEnd: true,
    },
  },
} as ComponentMeta<typeof GovernanceSection>;

const variantsArgs = [{}];

export const [[LightMode, DarkMode]] = createThemeModeVariants(
  () => (
    <KeyChangeSection title="Governance" expanded={true} onExpand={() => null}>
      <SectionContainer>
        <GovernanceSection />
      </SectionContainer>
    </KeyChangeSection>
  ),
  variantsArgs,
  false
);
