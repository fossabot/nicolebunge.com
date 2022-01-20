/* eslint-disable import/no-extraneous-dependencies */

import { render } from '@testing-library/react';
import React from 'react';
import { Instagram14 } from '..';

describe('Instagram icon component', () => {
  it('renders correctly', () => {
    const { container } = render(<Instagram14 width={24} height={24} fill="#000" />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
