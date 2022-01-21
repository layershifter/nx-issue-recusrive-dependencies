import { useCallbackRef } from 'use-callback-ref';

/* eslint-disable-next-line */
export interface CorePkg2Props {}

export function CorePkg2(props: CorePkg2Props) {
  const ref = useCallbackRef(null, (newValue) => {
    console.log(newValue);
  });

  return (
    <div ref={ref}>
      <h1>Welcome to CorePkg2!</h1>
    </div>
  );
}

export default CorePkg2;
