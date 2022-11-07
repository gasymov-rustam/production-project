import { FC, Suspense } from 'react';

import { Loader } from '../../../ui';

export const SuspenseLoader: FC = ({ children }) => <Suspense fallback={<Loader />}>{children}</Suspense>;
