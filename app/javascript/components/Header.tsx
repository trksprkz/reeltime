import React from 'react'
import Logo from "../images/reeltime.svg";
import MenuIcon from "../images/menu-2.svg";
import ArrowIcon from "../images/arrow-big-right-lines-filled.svg";
import Menu from "./Menu";

function Header() {
  // useState for Open Menu
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    document.body.style.overflow = "hidden";
  };

  function handleMenuClose() {
    setClicked(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {clicked === true && <Menu onClose={handleMenuClose} />}
      {/* Setting main div for width of screen on Header */}
      <div className="w-screen z-10 h-18 bg-darkNavy sticky top-0">
        {/* Spacing the content */}
        <div className="z-5 flex flex-row justify-between mr-4 p-2 items-center">
          <img
            src={Logo}
            alt="Reeltime Logo"
            className="m-2 ml-10 w-10 h-10 justify-start"
          />

          <button className="bg-normalBlue hover:bg-navy text-White font-bold py-2 px-6 mr-2 rounded ml-auto w-28 h-10">
            Sign Up
          </button>

          <button onClick={handleClick}>
            <img
              src={MenuIcon}
              alt="Menu Icon"
              className="m-2 w-8 h-8 justify-end"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
