// useRouterを使うことで、プログラムからページ遷移を行うことができる

'use client';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push('/')}>Top</button>
    </div>
  );
};

export default Page;
