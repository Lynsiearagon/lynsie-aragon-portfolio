// import Link from "next/link";

export default function FunPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          🎨 Frontend Fun
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          When I'm not coding or bowling, I love exploring creative frontend projects 
          and experimenting with new technologies. Here's some of the fun stuff I've been working on!
        </p>
      </section>

      {/* Interactive Elements Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Interactive Elements</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Color Picker */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">🎨 Color Palette Generator</h3>
            <p className="text-slate-300 mb-6">
              Click the button below to generate a random color palette using modern CSS and JavaScript!
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-lg border-2 border-slate-600 cursor-pointer hover:scale-110 transition-transform"
                    style={{ backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)` }}
                    onClick={(e) => {
                      const color = getComputedStyle(e.currentTarget).backgroundColor;
                      navigator.clipboard.writeText(color);
                      e.currentTarget.style.transform = 'scale(1.2)';
                      setTimeout(() => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }, 200);
                    }}
                  ></div>
                ))}
              </div>
              <button 
                className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium rounded-lg transition-all duration-200"
                onClick={() => window.location.reload()}
              >
                Generate New Colors
              </button>
            </div>
          </div>

          {/* Typography Showcase */}
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-4">📝 Typography Playground</h3>
            <p className="text-slate-300 mb-6">
              Explore different font styles and see how typography can transform content presentation.
            </p>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-blue-400">Bold & Blue</div>
              <div className="text-2xl font-mono text-cyan-400">Monospace Cyan</div>
              <div className="text-lg italic text-slate-300">Italic Slate</div>
              <div className="text-sm text-slate-400">Small & Subtle</div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">CSS Animations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 animate-bounce"></div>
            <h4 className="text-white font-semibold">Bounce</h4>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg mx-auto mb-4 animate-spin"></div>
            <h4 className="text-white font-semibold">Spin</h4>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 animate-pulse"></div>
            <h4 className="text-white font-semibold">Pulse</h4>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section>
        <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/30 text-center">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">🚀 More Coming Soon!</h2>
          <p className="text-slate-300 mb-6">
            I'm constantly working on new interactive elements and frontend experiments. 
            Check back regularly to see what's new!
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {['React Hooks', 'CSS Grid', 'Flexbox', 'Animations', 'Responsive Design', 'Accessibility'].map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
