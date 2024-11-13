import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <TailSpin
        visible={true}
        height="30"
        width="30"
        color="#2563eb"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
