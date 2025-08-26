import Image from "next/image";
import portfolioPicture from "../../public/photos/me.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
      </section>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <Image
              src={portfolioPicture}
              alt="Headshot of Lynsie Aragon"
              width={350}
              height={350}
              className="relative rounded-full border-4 border-slate-700 shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-slate-300">
              I&apos;m <span className="text-blue-400 font-semibold">Lynsie</span>, a 
              <span className="text-cyan-400 font-semibold"> Full Stack Software Developer</span> 
              specializing in frontend web development, primarily working with 
              <span className="text-blue-400 font-mono"> JavaScript</span>, 
              <span className="text-blue-400 font-mono"> React</span>, 
              <span className="text-blue-400 font-mono"> NextJS</span>, 
              <span className="text-blue-400 font-mono"> CSS</span>, and 
              <span className="text-blue-400 font-mono"> Tailwind</span> 
              (but I can do backend work, too).
            </p>
            
            <p className="text-lg leading-relaxed text-slate-300">
              I love coding because it blends problem-solving and creativity, 
              challenging me daily and feeding my need for innovation.
            </p>
          </div>

          {/* Bowling Section */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              🎳 Bowling Enthusiast
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I&apos;ve been a bowler since I was nine years old, went to 
              <span className="text-blue-400 font-semibold"> Prairie View A&M University</span> 
              on a bowling scholarship (majoring in criminal justice, not computer science - 
              <span className="text-cyan-400 font-semibold"> career changer here</span>), 
              and I still bowl today. On Wednesday nights you can find me at my bowling 
              league in pursuit of my lifelong mission - bowl a 300!
            </p>
            <Link 
              href="/bowling"
              className="inline-flex items-center mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Check out my Bowling section
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Skills Preview */}
          <div className="flex flex-wrap gap-2">
            {['React', 'NextJS', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Full Stack'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50 hover:border-blue-400/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
