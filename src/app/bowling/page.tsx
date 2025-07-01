import Carousel from "@/components/Carousel";

export default function page() {
  return (
    <div className="flex flex-col p-12 h-full flex justify-center md:w-3/4 lg:1/2">
      <h1 className="text-5xl text-center mb-8">Bowling</h1>
      <p className="text-center">
        Bowling has been a passion since I was young. I come from a family of
        bowlers and still bowl in league every Wednesday to reach my goal of
        bowling a 300!
      </p>

      <div className="my-12 grid gap-y-12 justify-center">
        <Carousel />
      </div>
    </div>
  );
}
