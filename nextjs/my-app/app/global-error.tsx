// error.tsxではpage.tsxのエラーしかキャッチできない
// global-error.tsxでは全てのエラーをキャッチできる

'use client';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <html>
      <body>
        <h2>Global Error</h2>
        <div>{error.message}</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};
