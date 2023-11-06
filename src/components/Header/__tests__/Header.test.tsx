import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import * as stories from '../Header.stories';

const { Default } = composeStories(stories);

describe('Header component', () => {
  it('renders correctly', async () => {
    const { container } = render(<Default />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
