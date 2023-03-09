import React from "react";
// import LogLang from "./LogLang";
// import HomeLang from "../Home/HomeLan";
import "./LogLang";
import Navbar from "../Home/Components/Navbar";
import Footer from "../Home/Components/Footer";
import LogIn from "./Components/Login/LogIn";

export default function LOG() {
  return (
    <>
      <Navbar />
      <LogIn />
      <Footer />
    </>
  );
}
