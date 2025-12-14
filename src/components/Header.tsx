"use client";
import Link from "next/link";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const threshold = 64;
    const onScroll = () => setIsShrunk(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="bg-slate-800/80 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="bg-yellow-400 text-black font-bold font-lg text-center p-2">
        SITE UNDER CONSTRUCTION
      </div>
      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-12 transition-all duration-200 ${
          isShrunk ? "py-2" : "py-4"
        }`}
      >
        <div className="flex flex-row justify-between items-start sm:items-center py-0 gap-4">
          <div className="flex flex-col gap-1">
            <Link
              href={"/"}
              className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent py-1 md:py-2 text-nowrap transition-all duration-200 ${
                isShrunk ? "text-3xl sm:text-4xl" : ""
              }`}
            >
              Lynsie Aragon
            </Link>

            <div className="flex flex-col md:flex-row">
              {!isShrunk && (
                <p className="text-lg text-slate-300 font-medium">
                  Full Stack Developer
                </p>
              )}

              {!isShrunk && <div className="hidden md:flex px-4">|</div>}

              {!isShrunk && (
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>
                    Available to{" "}
                    <Link href={"/contact"} className="hover:underline">
                      Connect
                    </Link>
                  </span>
                </div>
              )}
            </div>
          </div>

          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
