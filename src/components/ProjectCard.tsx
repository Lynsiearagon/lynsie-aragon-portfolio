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
      className="bg-slate-800 rounded-xl p-8 border border-slate-700/30 hover:border-cyan-400/30 flex flex-col gap-4"
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
        className="text-2xl font-bold hover:underline w-fit border-b border-white/20 pb-4 w-full"
      >
        {project.title}
      </a>
      <p className="flex-1 item-center">{project.description}</p>
      <ul className="flex flex-wrap gap-2 py-2 justify-center">
        {project?.techStack?.map((techItem: string) => (
          <li
            key={techItem}
            className="border w-fit rounded-full py-1 px-4 text-sm"
          >
            {techItem}
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-8 items-center justify-center my-4">
        <a href={project.link} className="hover:underline">
          View Website
        </a>
        <a href={project.codeLink} className="hover:underline">
          View ReadMe
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
