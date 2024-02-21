// []の中に...をつけると、そのパスの中で任意の数のパスを受け付けることができる
// 例: /blog2/2020/01/01/hello など

const Page = ({ params }: { params: { slugs: string[] } }) => {
  return <h1>Blog: {params.slugs.join(', ')}</h1>;
};

export default Page;
