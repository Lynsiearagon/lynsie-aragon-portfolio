import Image from "next/image";
import nationalsTeam from "../../photos/Nationals-team.jpg";
import nationalsMe from "../../photos/Nationals-me.jpg";
import actionShot1 from "../../photos/Action-shot.jpg";
import actionShot2 from "../../photos/Action-shot-2.jpg";
import pvamuTeam from "../../photos/PVAMU-team.jpg";

export default function page() {
  return (
    <div className="flex flex-col p-12 h-full flex justify-center md:w-3/4 lg:1/2">
      <h1 className="text-5xl text-center mb-8">Bowling</h1>
      <p className="text-center">Blurb will go here</p>

      <div className="my-12 grid gap-y-12 justify-center">
        <div className="flex flex-row gap-8">
          <Image
            src={actionShot1}
            alt="Action shot of Lynsie rolling bowling ball"
            width={600}
            height={400}
          ></Image>
          <p>Text</p>
        </div>

        <div className="flex flex-row gap-8">
          <p>Text</p>
          <Image
            src={nationalsTeam}
            alt="Action shot of Lynsie rolling bowling ball"
            width={600}
            height={400}
          ></Image>
        </div>

        <div className="flex flex-row gap-8">
          <Image
            src={actionShot2}
            alt="Action shot of Lynsie rolling bowling ball"
            width={600}
            height={400}
          ></Image>
          <p>Text</p>
        </div>

        <div className="flex flex-row gap-8">
          <p>Text</p>
          <Image
            src={pvamuTeam}
            alt="Action shot of Lynsie rolling bowling ball"
            width={600}
            height={400}
          ></Image>
        </div>

        <div className="flex flex-row gap-8">
          <Image
            src={nationalsMe}
            alt="Action shot of Lynsie rolling bowling ball"
            width={600}
            height={400}
          ></Image>
          <p>Text</p>
        </div>
      </div>
    </div>
  );
}
