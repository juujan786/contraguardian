import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="text-slate-700 w-full  bg-[#6b21e5] relative flex justify-center overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
      <Link to={""}>
        <img className="w-[150px]" src="images/logo.png" alt="" />
      </Link>
    </header>
  );
};

export default Navbar;
