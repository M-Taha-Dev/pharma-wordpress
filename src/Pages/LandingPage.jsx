import { Link } from 'react-router-dom';
import logo from '../assets/ps_wlogo.png';
import iphone from '../assets/LANDING IMAGE.png';
import backgroundVideo from '../assets/bg_home_720.mp4'


const LandingPage = () => {
  return (
    <div className="relative h-screen w-full style={{ opacity: 1 }}">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundVideo} // Replace with your video URL
        autoPlay
        muted
        loop
      />

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col md:flex-row gap-32 items-center justify-center w-full">
        {/* Left Section: Text and Button */}
        <div className="flex flex-col gap-8 text-white text-center md:text-left">
          <img
            src={logo}
            className="w-40 lg:w-80 h-auto mx-auto lg:mx-0"
            alt="Logo"
          />
          <div className="text-4xl font-semibold">
            YOUR MEDICAL CARE <br /> POWERED BY AI
          </div>
          <div className="text-lg lg:text-2xl">
            We leverage technology to ensure that everyone has <br /> access to quality care.
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Button shown on mobile */}

            {/* Button shown on larger screens */}
            <div className="hidden md:block">
              <Link 
                to="/explore" 
                className="p-4 bg-transparent border-4 border-white text-white font-semibold text-xl lg:text-lg rounded-full px-12 lg:px-16 hover:bg-white hover:text-blue-500 cursor-pointer transition duration-300"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Image (Hidden on Mobile) */}
        <div className="hidden md:flex justify-center items-center w-auto">
          <img
            src={iphone}
            style={{
              height: '600px',
              width: 'auto'
            }}
            alt="iPhone"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
