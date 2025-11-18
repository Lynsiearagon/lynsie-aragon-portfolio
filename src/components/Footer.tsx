import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700/50 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400">Get In Touch</h3>
            <div className="space-y-2">
              <p className="text-slate-300">
                <span className="text-slate-400">Email:</span>{" "}
                <a
                  href="mailto:Lynsie.aragon@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Lynsie.aragon@gmail.com
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/lynsie-aragon-dev/"
                className="inline-flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 border border-slate-600/50 hover:border-blue-400/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </Link>
              <Link
                href="https://wellfound.com/u/lynsie-aragon"
                className="inline-flex items-center px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 border border-slate-600/50 hover:border-blue-400/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Wellfound
              </Link>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="text-center md:text-right">
            <p className="text-slate-400 text-sm">
              Created and Maintained by{" "}
              <span className="text-cyan-400 font-semibold">Lynsie Aragon</span>
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Built with Next.js, TypeScript, Tailwind, and AI Tools
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
