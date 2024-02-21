// appフォルダ内にフォルダを作成しても、page.tsxとroute.tsxを設置しない限りアクセスされない
// appフォルダ内のフォルダ名の頭に_をつけることで、そのフォルダ内のファイルはアクセスされない
// 例: app/_lib/page.tsx

const Page = () => <div>現在の位置: app/_lib/page.tsx</div>;

export default Page;
