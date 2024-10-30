const Button = ({ text }) => {
  return (
    <div className="flex">
      <button
        className="bg-blue-300 hover:bg-blue-400 cursor-pointer py-[6px] px-7 text-lg rounded-md
    font-semibold mx-auto my-3 text-white"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
