import Link from "next/link";

function page() {
  return (
    <div className="p-8">
      <h1 className="text-5xl text-center mt-12 mb-8">About</h1>

      <div className="p-12 grid gap-y-8">
        <p>
          Hi! I'm Lynsie, a frontend-focused full stack developer working for
          Agility Consultants, LLC. I love coding because it combines both logic
          and creativity which challenges me and fuels my innovation. I
          specialize in frontend development, as that is where I shine, working
          primarily with React, NextJs, CSS, and Tailwind (but I can do backend
          work, too).
        </p>

        <div>
          <h2>OUTSIDE PROJECTS</h2>
          <p>
            I recently started refactoring my old full stack project, Yapp, to
            improve speeds and code readability. As I'm going through this
            project, I love to see how much I've grown as a developer. (What was
            2022 Lynsie thinking?!)
          </p>
        </div>

        <div>
          <h2>HOBBIES</h2>
          <p>
            I've been a bowler since I was nine years old, went to Prairie View
            A&M University on a bowling scholarship (majoring in criminal
            justice, not computer science (career changer here)), and I still
            bowl today. On Wednesday nights you can find me at my bowling league
            in pursuit of my life long mission - bowl a 300! Checkout the{" "}
            <Link href="/bowling">Bowling</Link> section to see more!
          </p>
        </div>

        <div>
          <h2>LET'S CONNECT</h2>
          <p>
            React out to me on LinkedIn or Github. You can find more ways to get
            in touch with me on my <Link href={"/contact"}>Contacts</Link> page.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
