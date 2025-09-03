import Link from "next/link";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="bg-yellow-400 text-black font-bold font-lg text-center p-2">
        SITE UNDER CONSTRUCTION
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-start sm:items-center py-4 gap-4">
          <Link href={"/"} className="space-y-1">
            <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent py-1 md:py-2 text-nowrap">
              Lynsie Aragon
            </h1>
            <p className="text-lg text-slate-300 font-medium">
              Full Stack Developer
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
