import { useEffect, useState } from 'react';
import { Button } from '../../../shared';

// test error boundary throw new Error
export const TestBug = () => {
  const [error, setError] = useState(false);

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={onThrowError}>throw new Error</Button>;
};
