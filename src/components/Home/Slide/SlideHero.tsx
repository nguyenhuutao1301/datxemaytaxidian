"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { siteConfig } from "@/config/default.config";

type Slide = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: "/slider1.png",
    title: "Đặt Taxi Nhanh, Giá Rẻ & Chuyên Nghiệp",
    description: "Dịch vụ taxi hàng đầu với tài xế lành nghề, xe sạch sẽ và dịch vụ tận tâm.",
  },
  {
    id: 2,
    image: "/grab-image-5.png",
    title: "Giao Hàng Nhanh & An Toàn",
    description: "Giao hàng chuyên nghiệp trong toàn quốc với đội tác vụ đáng tin cậy.",
  },
  {
    id: 3,
    image: "/slider2.png",
    title: "Đa Dạng Loại Xe, Phục Vụ 24/7",
    description: "Xe 4 chỗ, 7 chỗ, 16 chỗ - Luôn sẵn sàng phục vụ bạn mọi lúc.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <Image src={slide.image} alt={slide.title} fill className="object-cover" priority={index === 0} />
          {/* Gradient overlay - professional look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 flex flex-col justify-center px-8 md:px-16">
            <div className="max-w-2xl">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">{slide.title}</h2>
              <p className="text-white/90 text-base md:text-lg font-light mb-8">{slide.description}</p>
              <a
                href={`tel:${siteConfig.contactInfo.phone}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-sm md:text-base transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>📞 Gọi ngay:</span>
                <span className="font-bold">{siteConfig.contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-30 transition duration-300 backdrop-blur-sm"
        aria-label="Prev slide"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-30 transition duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current ? "bg-white w-8 h-3" : "bg-white/50 hover:bg-white/70 w-3 h-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
