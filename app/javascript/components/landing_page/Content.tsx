import React from "react";
import "../index.css";
import Crypto from "../../images/stock_content.svg";
import AppStore from "../images/app-store.svg";
import GooglePlay from "../images/google-play.svg";
import ArrowDown from "../images/arrow-down.svg";
import Phone from "../images/phone.svg";
function Content() {
  return (
    <div className="w-screen h-screen flex bg-darkNavy z-0 relative font-sans">
      <div className="absolute inset-0 top-10 flex flex-col items-center">
        <h1 className="text-White font-bold text-5xl text-center">
          The Tracker You've Always Wanted
        </h1>
        <p className="text-White font-semibold text-center mt-4">
          With AI the perfect time to is always just a click away!
        </p>
        <img
          src={Crypto}
          alt="Crypto Vector"
          className="md:w-3/4 md:h-3/4 sm:w-3/4 sm:h-3/4 lg:w-2/4 lg::h-2/4 mb-8 crypto"
        />
        <div className="flex flex-row items-center mb-96 ">
          <a href="/">
            <img
              src={AppStore}
              alt="App Store Logo"
              className="w-40 h-40 mr-4"
            />
          </a>
          <a href="/">
            <img
              src={GooglePlay}
              alt="Google Play Logo"
              className="w-40 h-40"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
