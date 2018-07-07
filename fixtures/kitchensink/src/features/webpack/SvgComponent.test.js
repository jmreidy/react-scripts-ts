/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SvgComponent from './SvgComponent';

describe('svg component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SvgComponent />, div);
    expect(div.textContent).toBe('svg {"id":"feature-svg-component","title":"Svg Title"}');
  });
});
