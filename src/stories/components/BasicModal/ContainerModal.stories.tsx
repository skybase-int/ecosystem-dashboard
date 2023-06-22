import { ParsedExpenseCategoryBuilder } from '@ses/core/businessLogic/builders/categoriesBuilders';
import { withFixedPositionRelative } from '@ses/core/utils/storybook/decorators';
import { createThemeModeVariants } from '@ses/core/utils/storybook/factories';

import ContainerModal from './ContainerModal';
import type { ComponentMeta } from '@storybook/react';
import type { FigmaParams } from 'storybook-addon-figma-comparator/dist/ts/types';

export default {
  title: 'Components/General/ContainerModal',
  component: ContainerModal,
  decorators: [withFixedPositionRelative],
  parameters: {
    layout: 'fullscreen',
    chromatic: {
      viewports: [375, 834, 1194, 1280, 1440],
      pauseAnimationAtEnd: true,
    },
  },
} as ComponentMeta<typeof ContainerModal>;
const variantsArgs = [
  {
    headCountCategories: [
      new ParsedExpenseCategoryBuilder().withName('Compensation & Benefits').build(),
      new ParsedExpenseCategoryBuilder().withName('Travel & Entertainment').build(),
      new ParsedExpenseCategoryBuilder().withName('Bonus').build(),
    ],
    noHeadCountCategories: [
      new ParsedExpenseCategoryBuilder().withName('Governance Programs').build(),
      new ParsedExpenseCategoryBuilder().withName('Training Expense').build(),
      new ParsedExpenseCategoryBuilder().withName('Supplies').build(),
      new ParsedExpenseCategoryBuilder().withName('Community Development Expense').build(),
      new ParsedExpenseCategoryBuilder().withName('Software Development Expense').build(),

      new ParsedExpenseCategoryBuilder().withName('Hardware Expense').build(),
      new ParsedExpenseCategoryBuilder().withName('Professional Services').build(),
      new ParsedExpenseCategoryBuilder().withName('Marketing Expense').build(),
      new ParsedExpenseCategoryBuilder().withName('Freight & Duties').build(),
      new ParsedExpenseCategoryBuilder().withName('Contingency Buffer').build(),
      new ParsedExpenseCategoryBuilder().withName('Gas Expense').build(),

      new ParsedExpenseCategoryBuilder().withName('Admin Expense').build(),
    ],
    isCheckedExpandedAll: false,
    isSomeOpen: true,
  },
  {
    headCountCategories: [
      new ParsedExpenseCategoryBuilder().withName('Compensation & Benefits').build(),
      new ParsedExpenseCategoryBuilder()
        .withName('Travel & Entertainment')
        .withSubcategories([
          {
            name: 'Hotels',
            id: '1',
            headcountExpense: true,
            order: 1,
          },
          {
            name: 'Airfare',
            id: '2',
            headcountExpense: true,
            order: 2,
          },
          {
            name: 'Meals',
            id: '3',
            headcountExpense: true,
            order: 3,
          },
          {
            name: 'Activities & Events',
            id: '4',
            headcountExpense: true,
            order: 4,
          },
          {
            name: 'Transportation (Uber, Taxi, etc)',
            id: '5',
            headcountExpense: true,
            order: 5,
          },
        ])
        .build(),
      new ParsedExpenseCategoryBuilder().withName('Bonus').build(),
    ],
    noHeadCountCategories: [
      new ParsedExpenseCategoryBuilder().withName('Governance Programs').build(),
      new ParsedExpenseCategoryBuilder().withName('Training Expense').build(),
      new ParsedExpenseCategoryBuilder().withName('Supplies').build(),
      new ParsedExpenseCategoryBuilder().withName('Community Development Expense').build(),
    ],
    isCheckedExpandedAll: false,
    isSomeOpen: false,
  },
];

export const [[UnExpanded, UnExpandedDarkMode], [Expanded, ExpandedDarkMode]] = createThemeModeVariants(
  ContainerModal,
  variantsArgs
);

UnExpanded.parameters = {
  figma: {
    component: {
      375: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19645:251384&t=fOGMLXYgBjWme3h3-4',
        options: {
          componentStyle: {
            width: 375,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
      834: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19645:247601&t=3rWAHk8rUGngJTx7-4',
        options: {
          componentStyle: {
            width: 770,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
      1194: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19614:238996&t=QN0Rot6AvH91wak3-4',
        options: {
          componentStyle: {
            width: 1114,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
      1280: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19614:233065&t=yDPsqRiXJrfl63Km-4',
        options: {
          componentStyle: {
            width: 1184,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19614:220712&t=yDPsqRiXJrfl63Km-4',
        options: {
          componentStyle: {
            width: 1184,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
    },
  } as FigmaParams,
};

Expanded.parameters = {
  figma: {
    component: {
      1440: {
        component:
          'https://www.figma.com/file/pyaYEjcwF2b5uf9y0vIfIy/SES-Dashboard?type=design&node-id=19444:213383&t=wTeFraHPRXrZ38Md-4',
        options: {
          componentStyle: {
            width: 1184,
          },
          style: {
            top: -36,
            left: -57,
          },
        },
      },
    },
  } as FigmaParams,
};
