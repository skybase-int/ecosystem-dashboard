import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';
import BudgetTransitionStatusSection from './BudgetTransitionStatusSection';
import type { Meta } from '@storybook/react';
import type { FigmaParams } from 'sb-figma-comparator';

const meta: Meta<typeof BudgetTransitionStatusSection> = {
  title: 'fusion/Endgame/Budget Transition Status Section',
  component: BudgetTransitionStatusSection,
  parameters: {
    chromatic: {
      viewports: [375, 768, 1024, 1280, 1440],
      pauseAnimationAtEnd: true,
    },
  },
};
export default meta;

const variantsArgs = [
  {
    selected: 'Budget',
    handleChange: () => null,
    data: {
      '2021/Q1': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2021/Q2': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2021/Q3': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2021/Q4': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2022/Q1': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2022/Q2': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2022/Q3': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2022/Q4': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2023/Q1': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2023/Q2': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2023/Q3': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
      '2023/Q4': {
        legacy: 103289909.62499996,
        endgame: 36306730.765775874,
      },
    },
  },
];

const [[LightMode, DarkMode]] = createThemeModeVariants(BudgetTransitionStatusSection, variantsArgs);
export { LightMode, DarkMode };

LightMode.parameters = {
  figma: {
    component: {
      375: {
        component:
          'https://www.figma.com/design/iLyzLutlWLu6Yf8tFdlM6T/Fusion%2FPowerhouse?node-id=219:51528&t=CMVqLVlvnrm0JRjr-4',
        options: {
          componentStyle: {
            width: 343,
          },
          style: {
            top: -12,
            left: -14,
          },
        },
      },
      768: {
        component:
          'https://www.figma.com/design/iLyzLutlWLu6Yf8tFdlM6T/Fusion%2FPowerhouse?node-id=208:27252&t=CMVqLVlvnrm0JRjr-4',
        options: {
          componentStyle: {
            width: 704,
          },
          style: {
            top: -12,
            left: -14,
          },
        },
      },
      1024: {
        component:
          'https://www.figma.com/design/iLyzLutlWLu6Yf8tFdlM6T/Fusion%2FPowerhouse?node-id=208:25001&t=CMVqLVlvnrm0JRjr-4',
        options: {
          componentStyle: {
            width: 960,
          },
          style: {
            top: -10,
            left: -14,
          },
        },
      },
      1280: {
        component:
          'https://www.figma.com/design/iLyzLutlWLu6Yf8tFdlM6T/Fusion%2FPowerhouse?node-id=159:9078&t=CMVqLVlvnrm0JRjr-4',
        options: {
          componentStyle: {
            width: 1200,
          },
          style: {
            top: -10,
            left: -14,
          },
        },
      },
      1440: {
        component:
          'https://www.figma.com/design/iLyzLutlWLu6Yf8tFdlM6T/Fusion%2FPowerhouse?node-id=61:17767&t=CcFaruzGPjTWsERD-4',
        options: {
          componentStyle: {
            width: 1312,
          },
          style: {
            top: -10,
            left: -14,
          },
        },
      },
    },
  } as FigmaParams,
};
