import { ComponentType, ReactNode } from 'react';

type ProviderProps = {
  children: ReactNode;
};

export const composeProviders = (...providers: ComponentType<ProviderProps>[]) => {
  return providers.reduceRight(
    (children: ReactNode, Provider) => {
      return <Provider>{children}</Provider>;
    },
    <></>
  );
};
