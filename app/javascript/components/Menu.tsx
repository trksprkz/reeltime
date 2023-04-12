import React from "react";
import Close from "../images/x.svg";
import Logo from "../images/reeltime.svg";

type MenuProps = {
  onClose: () => void;
};

function Menu(props: MenuProps) {
  const handleCloseClick = () => {
    props.onClose();
  };

  return (
    <>
      <div className="h-screen w-screen sticky top-0 mobile-menu-bg z-50">
        <div className="flex flex-row mr-4 w-screen justify-end">
          <button className=" border-2 border-normalBlue  hover:border-none shadow-md hover:bg-navy text-White m-4 font-bold py-2 px-6 mr-2 rounded ml-auto w-28 h-10">
            Login
          </button>
          <button>
            <img
              src={Close}
              alt="Close Menu"
              onClick={handleCloseClick}
              className="w-8 h-8 m-4 border-2 border-x-White border-solid"
            />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center pt-vh text-5xl text-White">
          <a href="/" className="mb-5 hover:text-normalBlue hover:shadow-md">
            Stocks
          </a>
          <a href="/" className="mb-5 hover:text-normalBlue hover:shadow-md">
            Crypto
          </a>
          <a href="/" className="mb-5 hover:text-normalBlue hover:shadow-md">
            About
          </a>
          <a href="/" className="mb-5 hover:text-normalBlue hover:shadow-md">
            Pricing
          </a>
          <a href="/" className="mb-5 hover:text-normalBlue hover:shadow-md">
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
