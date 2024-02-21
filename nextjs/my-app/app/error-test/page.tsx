// ~/error-test?error=1にアクセスするとエラーが発生する

const Page = ({
  params,
  searchParams,
}: {
  params: { error: string };
  searchParams: URLSearchParams;
}) => {
  const error = searchParams?.error;

  if (error) {
    throw new Error('!Error!');
  }

  return <h1>Error Test</h1>;
};

export default Page;
