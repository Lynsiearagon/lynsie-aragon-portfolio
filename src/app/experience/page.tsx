export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Experience
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
        
        {/* Resume Download Button */}
        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg border-0">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </button>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
          <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h4z" />
          </svg>
          Work History
        </h2>

        <div className="space-y-8">
          {/* Full Stack Developer */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                Full Stack Developer
              </h3>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
                Sept 2023 - Mar 2025
              </span>
            </div>
            <p className="text-slate-400 mb-4 font-medium">Agility Consultants LLC - Remote</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Developed SaaS web apps for a major federal agency, ensuring seamless agriculture data exchange across all 50 states, US territories, and the federal government</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Built pixel-perfect UIs based on specs and refactored frontends in JavaScript, React, and CSS, resulting in a frictionless user experience, data integrity, and improved accessibility</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Implemented robust error handling, debugged, and used best practices for maintainable and scalable apps</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Identified and resolved UX/UI issues, enhancing overall product usability and client satisfaction</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span>Created and consumed RESTful APIs to enable full CRUD functionality</span>
              </li>
            </ul>
          </div>

          {/* Paralegal Positions */}
          {[
            {
              title: "Paralegal",
              company: "Fabricant LLP",
              location: "Rye, NY",
              period: "Jan 2021 - Apr 2022"
            },
            {
              title: "Paralegal", 
              company: "Hach Rose LLP",
              location: "New York, NY",
              period: "Sept 2019 - Jan 2021"
            },
            {
              title: "Legal Assistant",
              company: "Desmarais LLP", 
              location: "New York, NY",
              period: "Jun 2018 - Aug 2019"
            }
          ].map((job, index) => (
            <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                  {job.title}
                </h3>
                <span className="px-4 py-2 bg-slate-600/30 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50">
                  {job.period}
                </span>
              </div>
              <p className="text-slate-400 mb-4 font-medium">{job.company} - {job.location}</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Used SQL queries in legal databases to extract case documents for hearings, trials, and depositions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Managed court submissions and digital case files, ensuring compliance with strict deadlines</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
          <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Projects
        </h2>
        
        <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700/30 text-center">
          <p className="text-slate-400 text-lg">
            More projects coming soon! Check back for updates on my latest work.
          </p>
        </div>
      </section>
    </div>
  );
}
