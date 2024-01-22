export function WhatWeDoWrapper(Component: any) {
  return (props: any) => {
    return (
      <>
        <Component {...props} />
      </>
    );
  };
}
