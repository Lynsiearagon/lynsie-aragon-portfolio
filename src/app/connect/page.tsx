import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent h-20">
          #Connect
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          I&apos;m always interested in hearing about new opportunities and
          exciting projects. Let&apos;s connect and discuss how we can work
          together!
        </p>
      </section>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2  gap-8 mb-16">
        {/* LinkedIn Section */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">LinkedIn</h3>
            <p className="text-slate-300 mb-6">
              Connect with me professionally on LinkedIn and see my latest
              updates
            </p>
            <Link
              href="https://www.linkedin.com/in/lynsie-aragon-dev/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
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
              Connect on LinkedIn
            </Link>
          </div>
        </div>

        {/* GitHub Section */}
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .296C5.373.296 0 5.67 0 12.3c0 5.301 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.017-2.04-3.338.727-4.042-1.608-4.042-1.608-.546-1.388-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.654.243 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.622-5.475 5.919.43.369.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.268 0 .322.216.694.825.576C20.565 22.096 24 17.595 24 12.3 24 5.67 18.627.296 12 .296z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">GitHub</h3>
            <p className="text-slate-300 mb-6">
              Connect with me on GitHub for my personal creations
            </p>
            <Link
              href="https://github.com/Lynsiearagon"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .296C5.373.296 0 5.67 0 12.3c0 5.301 3.438 9.8 8.205 11.387.6.111.82-.261.82-.579 0-.286-.011-1.04-.017-2.04-3.338.727-4.042-1.608-4.042-1.608-.546-1.388-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.235-3.221-.124-.303-.535-1.522.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.654.243 2.873.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.622-5.475 5.919.43.369.814 1.096.814 2.21 0 1.595-.015 2.877-.015 3.268 0 .322.216.694.825.576C20.565 22.096 24 17.595 24 12.3 24 5.67 18.627.296 12 .296z" />
              </svg>
              Connect on GitHub
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <section className="mt-8 mb-16 mx-auto">
        <div className="">
          <ContactForm />
        </div>
      </section>

      {/* Additional Platforms */}
      {/* <section className="text-center">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6">
          Other Platforms
        </h2>
        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
          <Link
            href="https://wellfound.com/u/lynsie-aragon"
            className="inline-flex items-center px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-all duration-200 border border-slate-600/50 hover:border-blue-400/50"
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
            View on Wellfound
          </Link>
        </div>
      </section> */}
    </div>
  );
}
