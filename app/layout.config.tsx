import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';

/**
 * Shared layout configuration
 *
 * you cna configure layouts individually from:
 * Home Layout:
 */
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'My App',
  },
  links: [
    {
      text: 'Documentation',
      url: '/24T3',
      active: 'nested-url',
    },
  ],
};
