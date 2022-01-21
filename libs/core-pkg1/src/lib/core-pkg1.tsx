import FocusLock from 'react-focus-lock';

/* eslint-disable-next-line */
export interface CorePkg1Props {}

export function CorePkg1(props: CorePkg1Props) {
  return (
    <div>
      <FocusLock>
        <h1>Welcome to CorePkg1!</h1>
      </FocusLock>
    </div>
  );
}

export default CorePkg1;
