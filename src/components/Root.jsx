import React from "react";
import Navber from "../pages/Navber";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <div className="xl:w-9/12 md:10/12 mx-auto xl:px-0 px-5">
        <Navber></Navber>
        <Outlet></Outlet>
      </div>
      <div className="bg-black">
        <div className="xl:w-9/12 md:10/12 mx-auto xl:px-0 px-5">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Root;
