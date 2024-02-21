// tsconfig.jsonにbaseUrlを設定することで、絶対パスでimportできる
import Button from 'components/button';

const Page = () => {
  return (
    <div>
      <h1>Absolute Import Test</h1>
      <Button />
    </div>
  );
};

export default Page;
