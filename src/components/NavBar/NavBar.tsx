"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
// import { useState } from "react";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="py-4 w-full border">
      <button
        className="w-full sm:hidden cursor-pointer flex justify-center items-center hover:text-blue-600"
        onClick={() => setShowNav(!showNav)}
      >
        Menu
      </button>
      <ul
        className={`${
          showNav && window.innerWidth < 640 ? "flex flex flex-col" : "hidden"
        } sm:flex sm:flex-col sm:flex-row justify-center items-center sm:gap-12`}
      >
        <Link
          className="hover:text-blue-600"
          href={"/"}
          onClick={() => setShowNav(!showNav)}
        >
          About
        </Link>
        <Link
          className="hover:text-blue-600"
          href={"/experience"}
          onClick={() => setShowNav(!showNav)}
        >
          Experience
        </Link>
        <Link
          className="hover:text-blue-600"
          href={"/fun"}
          onClick={() => setShowNav(!showNav)}
        >
          Frontend Fun
        </Link>
        <Link
          className="hover:text-blue-600"
          href={"/bowling"}
          onClick={() => setShowNav(!showNav)}
        >
          Bowling
        </Link>
        <Link
          className="hover:text-blue-600"
          href={"/contact"}
          onClick={() => setShowNav(!showNav)}
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
