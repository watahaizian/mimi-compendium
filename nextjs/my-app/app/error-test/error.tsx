// page.tsxエラーが発生するとここのコンポーネントが表示される

'use client';
import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Error</h1>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
};
