/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import logo from '../assets/ps_logo.png';
import backgroundImage from "../assets/young-people-in-the-office-2023-11-27-04-49-17-utc.jpg";
import panelImage from "../assets/pexels-thirdman-5327585.jpg"; 
import partnerImage from "../assets//pexels-tima-miroshnichenko-5452293.jpg";
import Footer from "./Footer";

const Join = () => {
  const [activeTab, setActiveTab] = useState("Jobs");
  const [selectedCountry, setSelectedCountry] = useState("UAE");

  const jobsByCountry = {
    UAE: [
      { title: "Javascript Developer", duration: "1 Year", date: "2021-05-08" },
      { title: "React Developer", duration: "2 Years", date: "2022-06-10" },
    ],
    PAKISTAN: [
      { title: "Javascript Developer", duration: "1 Year", date: "2021-05-08" },
    ],
    INDIA: [
      { title: "Apps Developer", duration: "2 Years", date: "2021-05-08" },
    ],
    KENYA: [
      { title: "IOS Developer", duration: "2 Years", date: "2021-05-08" },
      { title: "NodeJS Developer", duration: "3 Years", date: "2021-05-08" },
    ],
  };
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="w-full flex flex-col justify-between px-4 py-8 lg:px-32">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <img src={logo} alt="Logo" className="w-48 lg:w-64 h-auto" />
        </div>

        {/* Join Us Section */}
        <div className="text-center flex flex-col items-center gap-8 lg:gap-16 mt-8 lg:mt-16">
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-800">
            Join Us
          </h1>
          <div className="flex justify-center">
            <img
              src={backgroundImage}
              alt="Background"
              className="w-full max-w-xs lg:max-w-md rounded-lg"
            />
          </div>
          <p className="mt-4 lg:mt-8 text-base lg:text-lg text-gray-700 px-4 lg:px-64">
            We are on a mission to make healthcare affordable, accessible, and
            inclusive for everyone. We invite you to join us on this
            mission—whether through full-time employment, as a channel partner,
            or as a member of our esteemed panel of doctors.
          </p>
        </div>

        {/* Opportunities Section */}
        <div className="flex flex-col text-center justify-start py-8 lg:py-16">
          <h2 className="text-xl lg:text-4xl font-bold text-gray-800">
            Opportunities
          </h2>
          <div className="flex justify-center gap-2 lg:gap-4 mt-4">
            <button
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "Jobs"
                  ? "bg-yellow-300 text-gray-800"
                  : "bg-gray-100 text-gray-500"
              }`}
              onClick={() => setActiveTab("Jobs")}
            >
              Jobs
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "Partner"
                  ? "bg-yellow-300 text-gray-800"
                  : "bg-gray-100 text-gray-500"
              }`}
              onClick={() => setActiveTab("Partner")}
            >
              Partner
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeTab === "Panel"
                  ? "bg-yellow-300 text-gray-800"
                  : "bg-gray-100 text-gray-500"
              }`}
              onClick={() => setActiveTab("Panel")}
            >
              Panel
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "Jobs" && (
              <div className="mt-4">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-800">
                  Select a country to view available jobs:
                </h3>
                <div className="flex justify-center gap-2 lg:gap-4 mt-4">
                  {Object.keys(jobsByCountry).map((country) => (
                    <button
                      key={country}
                      className={`px-4 py-2 rounded-full font-semibold transition ${
                        selectedCountry === country
                          ? "bg-yellow-300 text-gray-800"
                          : "bg-gray-100 text-gray-500"
                      }`}
                      onClick={() => setSelectedCountry(country)}
                    >
                      {country}
                    </button>
                  ))}
                </div>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="py-2 px-4 border-b">Job Title</th>
                        <th className="py-2 px-4 border-b">Duration</th>
                        <th className="py-2 px-4 border-b">Date</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobsByCountry[selectedCountry].map((job, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b text-blue-500 cursor-pointer">
                            {job.title}
                          </td>
                          <td className="py-2 px-4 border-b">{job.duration}</td>
                          <td className="py-2 px-4 border-b">{job.date}</td>
                          <td className="py-2 px-4 border-b">
                            <button className="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition">
                              Apply
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "Partner" && (
              <div className="mt-8 shadow-2xl border border-1 rounded-lg p-4 flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/4">
                  <img
                    src={partnerImage}
                    alt="Partner Image"
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                {/* Form Section */}
                <div className="w-full lg:w-3/4 lg:pl-4">
                  <form className="flex flex-col justify-between h-full p-4 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-2">
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="First Name"
                        type="text"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Last Name"
                        type="text"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Email"
                        type="email"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Phone Number"
                        type="text"
                      />

<input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Your Business Vertical"
                        type="text"
                      />

<input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Website"
                        type="text"
                      />
                    </div>
                   
                    <textarea
                  className="w-full p-2 border-b-2 focus:outline-none mb-2"
                  placeholder="Your Message"
                  rows="3"  /* Reduced rows */
                ></textarea>
                    <div className="flex justify-end">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab === "Panel" && (
              <div className="mt-8 shadow-2xl border border-1 rounded-lg p-4 flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full lg:w-1/4">
                  <img
                    src={panelImage}
                    alt="Panel Image"
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                {/* Form Section */}
                <div className="w-full lg:w-3/4 lg:pl-4">
                  <form className="flex flex-col justify-between h-full p-4 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-2">
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="First Name"
                        type="text"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Last Name"
                        type="text"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Email"
                        type="email"
                      />
                      <input
                        className="w-full p-2 border-b-2 focus:outline-none"
                        placeholder="Phone Number"
                        type="text"
                      />
                    </div>
                    <div className="mb-2 flex flex-wrap gap-4">
                      <label className="flex gap-6 text-gray-700 mb-1">
                        Specialty:
                      </label>
                      <div className="flex items-center mb-1">
                        <input type="radio" name="specialty"                     className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black mr-2"
 />
                        <span>Cardiology</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <input type="radio" name="specialty" 
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black mr-2"
                    />
                        <span>Neurology</span>
                      </div>
                      <div 
                      className="flex items-center mb-1"
                      >
                        <input type="radio" name="specialty" 
                    className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black mr-2"
                    />
                        <span>Oncology</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <input type="radio" name="specialty"                     className="h-4 w-4 appearance-none border-2 border-gray-400 checked:bg-black checked:border-black mr-2"
 />
                        <span>Pediatrics</span>
                      </div>
                    </div>

                    <textarea
                  className="w-full p-2 border-b-2 focus:outline-none mb-2"
                  placeholder="Your Message"
                  rows="3"  /* Reduced rows */
                ></textarea>
                    <div className="flex justify-end">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Join;
