export interface Job {
  isCurrent: boolean;
  title: string;
  period: string;
  company: string;
  location: string;
  description: string[];
}
const Job = ({ job, compact = false }: { job: Job; compact?: boolean }) => {
  const wrapperClass = compact
    ? "py-8 border-b first:pt-0 last:border-b-0 border-cyan-400/20"
    : job.isCurrent
    ? "bg-slate-800/50 rounded-xl p-8 border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
    : "bg-slate-800/30 rounded-xl p-8 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300";

  return (
    <div className={wrapperClass}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h3 className="text-xl font-semibold text-white md:mb-2 mb-4 md:mb-0">
          {job.title}
        </h3>
        <span
          className={`mb-4 md:mb-0 ${
            job.isCurrent
              ? "px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30"
              : "px-4 py-2 bg-slate-600/30 text-slate-300 rounded-full text-sm font-medium border border-slate-600/50"
          }`}
        >
          {job.period}
        </span>
      </div>

      <p className="text-slate-400 mb-6 font-medium">
        {job.company} - {job.location}
      </p>

      <ul className="space-y-2 text-slate-300">
        {job.description.map((bulletPoint: string, idx: number) => (
          <li key={`${idx}`} className="flex items-start md:ml-4">
            <div
              className={`${
                job.isCurrent
                  ? "w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"
                  : "w-2 h-2 bg-slate-500 rounded-full mt-2 mr-3 flex-shrink-0"
              }`}
            ></div>
            <span>{bulletPoint}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
