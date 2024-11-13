import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <Triangle
        visible={true}
        height="60"
        width="60"
        color="#fff"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
