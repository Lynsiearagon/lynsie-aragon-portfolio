import Image from "next/image";

export interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  techStack: string[];
  codeLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div
      key={project.title}
      className="bg-slate-800 rounded-xl p-8 border border-slate-700/30 hover:border-cyan-400/30 flex flex-col gap-4 h-full"
    >
      <div className="relative aspect-6/4 w-full">
        <Image
          src={project.image}
          fill
          className="object-cover"
          alt="Yapp"
        ></Image>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener"
        className="text-2xl font-bold hover:underline border-b border-cyan-400/50 pb-4 w-full block"
      >
        {project.title}
      </a>

      <div className="flex flex-col flex-1">
        <p className="mt-4 text-slate-300">{project.description}</p>

        <ul className="flex flex-wrap gap-2 py-2 mt-4 justify-center">
          {project?.techStack?.map((techItem: string) => (
            <li
              key={techItem}
              className="border w-fit rounded-full py-1 px-4 text-sm"
            >
              {techItem}
            </li>
          ))}
        </ul>

        <div className="flex gap-8 items-center justify-center mt-8">
          <a
            href={project.link}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-6 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            Visit Website
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center px-6 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium rounded-md transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            See ReadMe
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
