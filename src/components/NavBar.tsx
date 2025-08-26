"use client";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    { href: "/", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/bowling", label: "Bowling" },
    { href: "/contact", label: "Contact" },
    { href: "/fun", label: "Fun" },
  ];

  return (
    <nav className="relative">
      {/* Mobile menu button */}
      <button
        className="sm:hidden p-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
        onClick={() => setShowNav(!showNav)}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showNav ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <ul
        className={`${
          showNav ? "flex" : "hidden"
        } sm:flex absolute sm:relative top-full sm:top-auto left-0 sm:left-auto right-0 sm:right-auto mt-2 sm:mt-0 bg-slate-800/95 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none border border-slate-700/50 sm:border-none p-4 sm:p-0 flex-col sm:flex-row gap-4 sm:gap-8 min-w-[200px] sm:min-w-0 z-50`}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              className="block px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 font-medium"
              href={item.href}
              onClick={() => setShowNav(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
