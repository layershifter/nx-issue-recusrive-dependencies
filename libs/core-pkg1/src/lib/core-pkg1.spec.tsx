import { render } from '@testing-library/react';

import CorePkg1 from './core-pkg1';

describe('CorePkg1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CorePkg1 />);
    expect(baseElement).toBeTruthy();
  });
});
