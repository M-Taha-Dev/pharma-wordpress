import { Link } from 'react-router-dom';
import backgroundImage from '../assets/LANDING BACK IMAGE.jpg';

const ExplorePage = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-black">
      {/* Background Image for Larger Screens */}
      <div
        className="absolute inset-0 bg-gray-400 md:bg-cover md:bg-center md:block hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Empty div to apply background image */}
      </div>

      {/* Mobile Only: Heading and Text */}
      <div className="relative z-10 w-full text-center md:hidden flex flex-col items-center justify-center mb-6 py-12 px-6">
        <h1 className="text-white text-4xl font-bold mb-4">Explore More</h1>
        <p className="text-white text-lg">
          Discover our offerings and connect with us to learn more.
        </p>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full md:w-5/6 h-5/6 p-6 md:p-12 flex flex-col md:flex-row justify-center md:justify-end items-center md:items-end gap-6">
        <Link
          to={'/contact-us'}
          className="w-full md:w-auto p-4 bg-transparent border-4 border-white text-white font-semibold text-lg md:text-xl rounded-full md:px-12 hover:bg-white hover:text-blue-500 cursor-pointer transition duration-300 text-center"
        >
          Contact
        </Link>

        <Link
          to={'/join-us'}
          className="w-full md:w-auto p-4 bg-transparent border-4 border-white text-white font-semibold text-lg md:text-xl rounded-full md:px-12 hover:bg-white hover:text-blue-500 cursor-pointer transition duration-300 text-center"
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default ExplorePage;
