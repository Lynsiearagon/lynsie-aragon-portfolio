import Carousel from "@/components/Carousel";
import { bowlingImages } from "@/data/data.js";

export default function BowlingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent h-20">
          🎳 Bowling
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Bowling has been a passion since I was young. I come from a family of
          bowlers, attended Prairie View A&M University on a bowling
          scholarship, and still bowl in league every Wednesday to reach my goal
          of bowling a 300!
        </p>
      </section>

      {/* Bowling Stats */}
      <section className="mb-16 text-center">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                High Game
              </h3>
              <p className="text-3xl font-bold text-cyan-400">279</p>
              <p className="text-slate-400 text-sm">X X X X X X X X X 9/ X</p>
            </div>
          </div>

          <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                High Series
              </h3>
              <p className="text-3xl font-bold text-cyan-400">724</p>
              <p className="text-slate-400 text-sm">Three Game Total</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕰️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Experience
              </h3>
              <p className="text-3xl font-bold text-cyan-400">20+</p>
              <p className="text-slate-400 text-sm">Years Bowling</p>
            </div>
          </div>

          <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Goal</h3>
              <p className="text-3xl font-bold text-cyan-400">300</p>
              <p className="text-slate-400 text-sm">Perfect Game</p>
            </div>
          </div>

          <div
            className="bg-slate-800 rounded-xl p-6 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Scholarship
              </h3>
              <p className="text-3xl font-bold text-cyan-400">PVAMU</p>
              <p className="text-slate-400 text-sm">Bowling Scholarship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section>
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center flex items-center justify-center">
          <svg
            className="w-8 h-8 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Bowling Gallery
        </h2>
        <div
          className="bg-slate-800 rounded-xl p-8 border border-slate-700 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/95 rounded-xl"></div>
          <div className="relative z-10 pt-6 lg:pt-12">
            <Carousel images={bowlingImages} />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mt-16 mb-12">
        <div
          className="bg-slate-800 rounded-xl p-8 p-16 border border-slate-700 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
          }}
        >
          <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Journey</h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Early Years
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I started at nine years old back in 2004, bowling with my
                  sisters and cousin in a Saturday youth league. We learned our
                  form and technique from volunteer coaches and started seeing
                  our scores improve. With the scores going up, so did our
                  competitive spirits. We began taking it more seriously and
                  competed in youth tournaments where we had the opportunity to
                  win scholarship money. By the time I started college, I had
                  over $5000 in scholarship money that I had won.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  College Years
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  I attended Prairie View A&M University on a bowling
                  scholarship where I competed at the collegiate level,
                  traveling primarily around the southern United States,
                  Chicago, Nashville, and even New Jersey. While my major was in
                  criminal justice with a focus in court systems, bowling was my
                  true passion and kept me focused on my studies. In 2014, I was
                  awarded Freshman of the Year by the South Western Athletic
                  Conference.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Current Goals
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Every Wednesday night you can find me at my bowling league,
                  working towards a perfect game. The combination of competition
                  and technique keeps me coming back each week. Similar to why I
                  love coding, bowling is a technical sport and I&apos;m always
                  working to improve!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center flex items-center justify-center">
          Bowling Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="bg-slate-800 rounded-xl p-8 lg:p-16 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-full h-16 bg-blue-500/20 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">
                  Aim For the Arrows
                </span>
              </div>
              <p className="text-lg font-semibold text-white mb-2 text-start">
                Don&apos;t aim for the pins, aim for the arrows on the lane.
                It&apos;s easier to hit a target that&apos;s closer than one
                that&apos;s far away.
              </p>
            </div>
          </div>
          <div
            className="bg-slate-800 rounded-xl p-8 lg:p-16 border border-slate-700 text-center hover:border-blue-400 transition-all duration-300 bg-cover bg-center bg-no-repeat relative"
            style={{
              backgroundImage: "url('/photos/bowling-alley-carpet.jfif')",
            }}
          >
            <div className="absolute inset-0 bg-slate-900/96 rounded-xl"></div>
            <div className="relative z-10">
              <div className="w-full h-16 bg-blue-500/20 rounded-md flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">
                  Follow Through
                </span>
              </div>
              <p className="text-lg font-semibold text-white mb-2 text-start">
                After releasing the ball, continue moving your arm upward above
                your head; this helps increase power and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
