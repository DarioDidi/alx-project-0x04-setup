import Link from "next/link"
import { FaHome } from "react-icons/fa"

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-bold mb-4">NOT FOUND</h1>
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>
      )
      < Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300" >
        <FaHome size={20} />
        <span>Go To Home Page</span>
      </Link >
    </div>
  );
};

export default Custom404;
