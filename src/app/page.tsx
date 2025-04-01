import Image from "next/image";
import portfolioPicture from "../photos/me.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-12 sm:pb-16 sm:py-12 sm:px-24">
      <div className="flex flex-col lg:flex-row justify-evenly items-center">
        <div className="flex justify-center items-center min-w-40 lg:w-1/3">
          <Image
            src={portfolioPicture}
            alt="Headshot of Lynsie"
            width={300}
            height={300}
            className="rounded-full"
          ></Image>
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl text-center mb-8 mt-8 lg:mt-0">About</h1>
          <div className="sm:text-justify grid gap-y-4">
            <p>
              Hi! I'm Lynsie, a full stack software developer specializing in
              frontend development, primarily working with JavaScript, React,
              NextJs, CSS, and Tailwind (but I can do backend work, too). I love
              coding because it blends problem-solving and creativity,
              challenging me daily and feeding my need for innovation.
            </p>

            <div>
              <h2 className="font-bold">OUTSIDE PROJECTS</h2>
              <p>
                I recently started refactoring my old full stack project, Yapp,
                to improve speeds and code readability. As I'm going through
                this project, I love to see how much I've grown as a developer.
                (What was 2022 Lynsie thinking?!)
              </p>
            </div>

            <div>
              <h2 className="font-bold">HOBBIES</h2>
              <p>
                I've been a bowler since I was nine years old, went to Prairie
                View A&M University on a bowling scholarship (majoring in
                criminal justice, not computer science (career changer here)),
                and I still bowl today. On Wednesday nights you can find me at
                my bowling league in pursuit of my life long mission - bowl a
                300! Checkout the <Link href="/bowling">Bowling</Link> section
                to see more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
