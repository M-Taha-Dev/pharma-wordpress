import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import colorLogo from "../assets/ps_logo.png";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-4">
      <div className="flex flex-col gap-6 items-center justify-center w-full h-full px-4 lg:px-0">
        <div className="w-full md:w-5/6 lg:w-4/6 flex items-center justify-center md:justify-start">
          <img
            src={colorLogo}
            className="h-16 md:h-20 w-auto"
            alt="Company Logo"
          />
        </div>
        <div className="w-full md:w-5/6 lg:w-4/6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row justify-between overflow-hidden">
          {/* Left Section - Contact Information */}
          <div className="w-full md:w-1/2 bg-green-500 p-8 flex flex-col justify-between">
            <div className="flex flex-col gap-4 md:gap-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Contact Information
              </h2>
              <p className="text-white text-base md:text-lg">
                Got questions or need assistance? We're here to help! Reach out
                to us anytime, and we'll get back to you as soon as possible.
                Let's connect!
              </p>
            </div>
            <div className="mt-6">
              <div className="text-white flex gap-4 items-center mb-4">
                <IoMail size={24} />
                <span className="text-base md:text-lg">demo@gmail.com</span>
              </div>
              <div className="text-white flex gap-4 items-center">
                <FaLocationDot size={24} />
                <span className="text-base md:text-lg">
                  132 Dartmouth Street Boston, Massachusetts 02156 United
                  States
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="first-name"
                >
                  First Name
                </label>
                <input
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  id="first-name"
                  type="text"
                />
              </div>
              <div className="w-full md:w-1/2 md:ml-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="last-name"
                >
                  Last Name
                </label>
                <input
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  id="last-name"
                  type="text"
                  value="Doe"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-4">
              <div className="w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  id="email"
                  type="email"
                />
              </div>
              <div className="w-full md:w-1/2 md:ml-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <input
                  className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                  id="phone-number"
                  type="text"
                  value="+1 012 3456 789"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Subject?
              </label>

              <div className="flex flex-wrap items-center justify-start gap-4 md:gap-8">
                <div className="flex items-center">
                  <input
                    id="general-inquiry"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black"
                    defaultChecked
                  />
                  <label
                    htmlFor="general-inquiry"
                    className="ml-2 text-gray-700"
                  >
                    General Inquiry
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="media-trade"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black"
                  />
                  <label htmlFor="media-trade" className="ml-2 text-gray-700">
                    Media / Trade
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="complaint"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black"
                  />
                  <label htmlFor="complaint" className="ml-2 text-gray-700">
                    Complaint
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="other"
                    name="subject"
                    type="radio"
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black"
                  />
                  <label htmlFor="other" className="ml-2 text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 outline-none resize-none"
                id="message"
                placeholder="Message"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-6 py-2 rounded">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full mt-6">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
