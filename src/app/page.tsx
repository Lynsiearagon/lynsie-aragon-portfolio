import Image from "next/image";
import portfolioPicture from "/public/photos/me.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent h-20">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </section>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Image
              src={portfolioPicture}
              alt="Headshot of Lynsie Aragon"
              width={350}
              height={350}
              className="relative rounded-full border-4 border-slate-700 shadow-2xl object-none"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 lg:space-y-8">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              I&apos;m{" "}
              <span className="text-blue-400 font-semibold">Lynsie</span>, a
              <span className="text-cyan-400 font-semibold">
                {" "}
                Full Stack Developer{" "}
              </span>
              specializing in frontend web development. I primarily work with
              <span className="text-blue-400 font-mono"> JavaScript</span>,
              <span className="text-blue-400 font-mono"> Next.Js</span>,
              <span className="text-blue-400 font-mono"> AI Tools</span>, and
              <span className="text-blue-400 font-mono"> Tailwind CSS</span>,
              but also have professional experience with other technologies like{" "}
              <span className="text-blue-400 font-mono"> SQL Databases</span>{" "}
              and{" "}
              <span className="text-blue-400 font-mono">
                {" "}
                Azure Cloud Services
              </span>
              .
            </p>
            <p className="text-lg leading-relaxed text-slate-300 mb-4">
              When I&apos;m not developing, you can find me on the bowling lanes
              chasing that perfect game -{" "}
              <span className="text-cyan-400 font-semibold">300</span>!
            </p>
          </div>

          {/* Bowling Section */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Learn more about my professional experience or check out my
              bowling stats!
            </h3>

            <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center">
              <Link
                href="/experience"
                className="inline-flex justify-between items-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg "
              >
                Go to Work History
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>

              <Link
                href="/bowling"
                className="inline-flex justify-between items-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg "
              >
                Take Me Bowling!
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
