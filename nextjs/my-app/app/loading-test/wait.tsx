const aWait = () => new Promise((callback) => setTimeout(callback, 3000));

const WaitComponent = async () => {
  await aWait();
  return <div>complete</div>;
};

export default WaitComponent;
