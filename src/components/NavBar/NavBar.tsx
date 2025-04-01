"use client";
import Link from "next/link";
// import { useState } from "react";

function NavBar() {
  // const [showNav, setShowNav] = useState(false);

  // function updateShowNav() {
  //   setShowNav(!showNav);
  // }

  return (
    <div className="py-4 w-full bg-blue-600">
      <button
        className="w-full sm:hidden cursor-pointer flex justify-center items-center hover:text-white"
        // onClick={updateShowNav}
      >
        Menu
      </button>
      <ul
        className={`flex flex-col sm:flex-row justify-center items-center sm:gap-12`}
      >
        <Link className="hover:text-white" href={"/"}>
          About
        </Link>
        <Link className="hover:text-white" href={"/experience"}>
          Experience
        </Link>
        <Link className="hover:text-white" href={"/fun"}>
          Frontend Fun
        </Link>
        <Link className="hover:text-white" href={"/bowling"}>
          Bowling
        </Link>
        <Link className="hover:text-white" href={"/contact"}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
