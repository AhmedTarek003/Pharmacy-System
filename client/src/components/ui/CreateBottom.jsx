import { Link } from "react-router-dom";

const CreateBottom = ({ text, link }) => {
  return (
    <Link
      to={link}
      className=" block bg-[var(--background-color)] hover:bg-[var(--secondery-color)]
      w-fit px-6 py-3 ml-6 rounded-lg text-white uppercase tracking-wider my-5 shadow-lg"
    >
      {text}
    </Link>
  );
};

export default CreateBottom;
