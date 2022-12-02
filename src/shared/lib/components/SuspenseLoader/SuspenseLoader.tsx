import { ReactNode, Suspense } from 'react';

import { Loader } from '../../../ui';

export const SuspenseLoader = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
