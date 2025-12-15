"use client";

import Link from "next/link";
import NavBar from "./NavBar";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isShrunk, setIsShrunk] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the sentinel leaves the viewport, shrink
        setIsShrunk(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(sentinelRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
        <div
          className={`container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 transition-[padding] duration-300 ease-in-out ${
            isShrunk ? "py-2" : "py-4"
          }`}
        >
          <div className="flex flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent py-1 md:py-2 whitespace-nowrap"
              >
                {`{ LynsieAragon }`}
              </Link>

              <div
                className={`flex flex-col md:flex-row items-start md:items-center
                  transition-all duration-300 ease-in-out
                  overflow-hidden
                  ${
                    isShrunk
                      ? "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
                      : "opacity-100 max-h-40 translate-y-0"
                  }
                `}
              >
                <p className="text-lg text-slate-300 font-medium">
                  Full Stack Developer
                </p>

                <div className="hidden md:flex px-4">|</div>

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>
                    Available to{" "}
                    <Link href="/connect" className="hover:underline">
                      Connect
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <NavBar />
          </div>
        </div>
      </header>

      {/* Sentinel: controls shrink behavior without layout feedback */}
      <div ref={sentinelRef} className="" />
    </>
  );
}

export default Header;
