import Image from "next/image";
import portfolioPicture from "/public/photos/me.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent h-20">
          #Portfolio
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
              className="relative rounded-full border-4 border-slate-700 shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6 lg:space-y-8">
          {/* Combined Content + CTAs Card */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700/30">
            <div className="prose prose-slate prose-lg max-w-prose mx-auto">
              <p className="text-lg leading-relaxed text-slate-300 mb-4">
                I&apos;m{" "}
                <span className="text-blue-400 font-semibold">Lynsie</span>, a
                <span className="text-cyan-400 font-semibold">
                  {" "}
                  Full-Stack Developer{" "}
                </span>
                specializing in frontend web development. I primarily work with
                <span className="text-blue-400 font-mono"> JavaScript</span>,
                <span className="text-blue-400 font-mono"> Next.js</span>,
                <span className="text-blue-400 font-mono"> AI tools</span>, and
                <span className="text-blue-400 font-mono"> Tailwind CSS</span>,
                and I also have professional experience with
                <span className="text-blue-400 font-mono">
                  {" "}
                  SQL databases
                </span>{" "}
                and
                <span className="text-blue-400 font-mono">
                  {" "}
                  Azure Cloud Services
                </span>
                .
              </p>

              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                When I&apos;m not developing, you can find me on the bowling
                lanes chasing that perfect game —{" "}
                <span className="text-cyan-400 font-semibold">300</span>!
              </p>

              <div className="border-t border-slate-700/20 pt-6 mt-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4 text-center">
                  Explore my experience or see bowling stats
                </h3>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/experience"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    Go to Work History
                  </Link>

                  <Link
                    href="/bowling"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                  >
                    Take Me Bowling!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
