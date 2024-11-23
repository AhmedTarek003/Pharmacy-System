import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200"
    >
      <div className="text-center">
        <h1
          className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
        from-blue-500 to-purple-600"
        >
          404
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-400">
          Oops! We can{"'"}t seem to find the page you{"'"}re looking for.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          The page might have been moved, removed, or never existed.
        </p>
      </div>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white
        text-lg font-medium rounded-lg shadow-lg hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
