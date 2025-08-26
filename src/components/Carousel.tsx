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
    alt: "Action shot of Lynsie rolling bowling ball during a SWAC tournament in 2015",
  },
  {
    src: nationalsTeam,
    alt: "Group photo of Lynsie and her team at USBC Nationals 2025 tournament",
  },
  {
    src: nationalsMe,
    alt: "Action shot of Lynsie rolling bowling ball at the 2025 USBC Nationals tournament",
  },
  { 
    src: pvamuTeam, 
    alt: "Prairie View A&M University 2017 bowling team" 
  },
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

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1000}
          height={800}
          className="object-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full transition-transform duration-500 ease-in-out hover:scale-105"
          priority
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-slate-800/80 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/90 text-white p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 border border-slate-600/50"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/90 text-white p-3 rounded-full cursor-pointer transition-all duration-200 hover:scale-110 border border-slate-600/50"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-cyan-400 scale-125"
                : "bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Description */}
      <div className="mt-4 text-center">
        <p className="text-slate-300 text-sm italic">
          {images[currentIndex].alt}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
