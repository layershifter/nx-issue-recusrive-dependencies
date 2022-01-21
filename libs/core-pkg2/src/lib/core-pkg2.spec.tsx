import { render } from '@testing-library/react';

import CorePkg2 from './core-pkg2';

describe('CorePkg2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CorePkg2 />);
    expect(baseElement).toBeTruthy();
  });
});
