// [[]]にすることで、~/blog3にアクセスした時にも、/blog3/xxxにアクセスした時にも、このページが表示される
// ...は必須ではないが、あると、/blog3/xxx/yyy/zzzのようなパスにも対応できる

const Page = ({ params }: { params: { slugs: string[] } }) => {
  if (params.slugs) {
    return <h1>Blog: {params.slugs.join(', ')}</h1>;
  } else {
    return <h1>Blog: (None)</h1>;
  }
};

export default Page;
