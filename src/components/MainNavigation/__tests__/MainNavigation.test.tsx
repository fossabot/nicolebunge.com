import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import MainNavigation from '..';

describe('MainNavigation component', () => {
  it('renders correctly', async () => {
    const routes = [
      {
        name: 'Index',
        path: '/',
      },
    ];
    const { container } = render(<MainNavigation routes={routes} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
