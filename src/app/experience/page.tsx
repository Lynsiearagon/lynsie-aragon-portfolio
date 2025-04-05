export default function page() {
  return (
    <div className="flex flex-col p-12 h-full flex justify-center md:w-3/4 lg:1/2">
      <h1 className="text-5xl text-center mb-8">Experience</h1>
      <button className="cursor-pointer m-2 border w-1/3 rounded-md p-2 flex justify-center self-center">
        Download Resume
      </button>

      <div className="my-12 grid gap-y-4">
        <h2 className="text-2xl">Work History</h2>
        <h3 className="text-lg flex flex-col md:flex-row justify-between">
          Full Stack Developer - Agility Consultants LLC - Remote
          <span>Sept 2023 – Mar 2025</span>
        </h3>
        <ul className="grid gap-y-2 text-justify pl-4 list-disc ml-4">
          <li>
            Developed SaaS web apps for a major federal agency, ensuring
            seamless agriculture data exchange across all 50 states, US
            territories, and the federal government
          </li>
          <li>
            Built pixel-perfect UIs based on specs and refactored frontends in
            JavaScript, React, and CSS, resulting in a frictionless user
            experience, data integrity, and improved accessibility
          </li>
          <li>
            Implemented robust error handling, debugged, and used best practices
            for maintainable and scalable apps
          </li>
          <li>
            Identifi ed and resolved UX/UI issues, enhancing overall product
            usability and client satisfaction
          </li>
          <li>
            Created and consumed RESTful APIs to enable full CRUD functionality
          </li>
        </ul>

        <h3 className="text-lg flex flex-col md:flex-row justify-between">
          Paralegal - Fabricant LLP - Rye, NY
          <span>Jan 2021 – Apr 2022</span>
        </h3>
        <ul className="grid gap-y-2 text-justify pl-4 list-disc ml-4">
          <li>
            Used SQL queries in legal databases to extract case documents for
            hearings, trials, and depositions
          </li>
          <li>
            Managed court submissions and digital case files, ensuring
            compliance with strict deadlines
          </li>
        </ul>

        <h3 className="text-lg flex flex-col md:flex-row justify-between">
          Paralegal - Hach Rose LLP - New York, NY
          <span>Sept 2019 – Jan 2021</span>
        </h3>
        <ul className="grid gap-y-2 text-justify pl-4 list-disc ml-4">
          <li>
            Used SQL queries in legal databases to extract case documents for
            hearings, trials, and depositions
          </li>
          <li>
            Managed court submissions and digital case files, ensuring
            compliance with strict deadlines
          </li>
        </ul>

        <h3 className="text-lg flex flex-col md:flex-row justify-between">
          Legal Assistant - Desmarais LLP - New York, NY
          <span>Jun 2018 – Aug 2019</span>
        </h3>
        <ul className="grid gap-y-2 text-justify pl-4 list-disc ml-4">
          <li>
            Used SQL queries in legal databases to extract case documents for
            hearings, trials, and depositions
          </li>
          <li>
            Managed court submissions and digital case files, ensuring
            compliance with strict deadlines
          </li>
        </ul>

        <h2 className="text-2xl">Projects</h2>
      </div>
    </div>
  );
}
