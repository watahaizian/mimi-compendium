// childrenはpageのreturnで囲まれた部分

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <hr />
      <div>{children}</div>
      <hr />
    </>
  );
};

export default Layout;
