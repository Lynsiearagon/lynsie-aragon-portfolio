import Job from "@/components/Job";
import ProjectCard from "@/components/ProjectCard";
import { projects, workHistory, skills, volunteerHistory } from "@/data/data";

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent h-20">
          #Experience
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-12"></div>

        {/* Resume Download Button */}
        <a
          href="/photos/LynsieAragonResume.pdf"
          download
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg border-0"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </a>
      </section>

      {/* Skills */}
      <section className="mt-8 mb-12 flex justify-center">
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600/50"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
          Work History
        </h2>

        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <Job job={job} key={index} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
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
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Projects
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center">
          Volunteer
        </h2>

        <div className="space-y-8">
          {volunteerHistory.map((job) => (
            <Job job={job} key={job.title} />
          ))}
        </div>
      </section>
    </div>
  );
}
