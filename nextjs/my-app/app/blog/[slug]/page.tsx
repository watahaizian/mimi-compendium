// ダイナミックルーティングのためのファイル名
// [slug] はダイナミックな値を受け取るためのファイル名
// 例: /blog/hello, /blog/hello-world, /blog/hello-world-2022

const Page = ({ params }: { params: { slug: string } }) => {
  return <h1>Blog: {params.slug}</h1>;
};

export default Page;
