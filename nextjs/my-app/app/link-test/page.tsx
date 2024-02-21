// Link Test
// aタグは遷移時にページをリロードするが、Linkコンポーネントは遷移時リロードしない
import Link from 'next/link';

const Page = () => (
  <>
    <h1>Link Test</h1>
    <ul>
      <li>
        <a href="page-test">a Page Test</a>
      </li>
      <li>
        <Link href="page-test">Link Page Test</Link>
      </li>
    </ul>
  </>
);

export default Page;
