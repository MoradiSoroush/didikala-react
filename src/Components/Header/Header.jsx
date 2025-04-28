import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import Navbar from "./Components/Navbar/Navbar";
import AdsHeader from "./Components/Ads/AdsHeader";
import "./Header.css"
// import "./../../main.css"

export default function Header() {
  return (
    <header class="main-header">
      
      {/* <AdsHeader /> */}

      <Topbar />

      <Navbar />
    </header>
  );
}
