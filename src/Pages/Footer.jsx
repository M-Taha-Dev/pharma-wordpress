const Footer = () => {
    return (
      <footer className="w-full bg-gray-100 py-4 px-8 md:px-32">
        <div className="  mx-auto ">
          {/* Horizontal Line */}
          <hr className="border-t-4 border-black mb-4" />
  
          {/* Footer Content */}
          <div className="flex justify-between items-center">
            {/* Left Section */}
            <div className="text-sm text-black">
              © 2024 PUREORGANIC LLC
            </div>
            {/* Right Section */}
            <div className="flex gap-4 text-sm black">
              <a href="/privacy" className="hover:underline">Privacy</a>
              <a href="/terms" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  