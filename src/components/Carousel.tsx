"use client";

import React, { useState } from "react";
import Image from "next/image";
import actionShot1 from "../../public/photos/Action-shot.jpg";
import nationalsTeam from "../../public/photos/Nationals-team.jpg";
import nationalsMe from "../../public/photos/Nationals-me.jpg";
import pvamuTeam from "../../public/photos/PVAMU-team.jpg";

const images = [
  {
    src: actionShot1,
    alt: "Action shot of Lynsie rolling bowling ball during a SWAC tournanemnt in 2015",
  },
  {
    src: nationalsTeam,
    alt: "Group photo of Lynsie and her team at USBC Nationals 2025 tournament",
  },
  {
    src: nationalsMe,
    alt: "Action shot of Lynsie rolling bowling ball at the 2025 USBC Nationals tournament",
  },
  { src: pvamuTeam, alt: "Prairie View A&M University 2017 bowling team" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative flex items-center justify-center ">
      <div className="rounded-lg">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1000}
          height={800}
          className="object-cover h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]"
          priority
        />
      </div>
      <button
        onClick={prevImage}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
