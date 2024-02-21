// []を複数繋げることで、複数のパラメータを受け取ることができる
// 例: /blog4/tech/nextjs など

const Page = ({ params }: { params: { category: string; slug: string } }) => {
  return (
    <h1>
      Blog: {params.category} / {params.slug}
    </h1>
  );
};

export default Page;
