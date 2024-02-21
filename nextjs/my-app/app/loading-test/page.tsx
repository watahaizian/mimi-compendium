// suspenseで時間のかかるコンポーネントを囲み、fallbackでローディングコンポーネントを表示する

import { Suspense } from 'react';
import Loading from './loading';
import WaitComponent from './wait';

const Page = () => {
  return (
    <div>
      <h1>Loading Test</h1>
      <Suspense fallback={<Loading />}>
        <WaitComponent />
      </Suspense>
    </div>
  );
};

export default Page;
