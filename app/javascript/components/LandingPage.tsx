import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import "../index.css";
import About from "../components/Phone";

function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Content />
    </>
  );
}

export default LandingPage;
