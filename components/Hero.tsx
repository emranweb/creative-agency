import Image from "next/image";
import React from "react";
import HeroImage from "@/public/hero-image.png";

const Hero = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-center flex-col items-center">
          <h1 className="heading-1 md:w-7/12 mb-6 w-full">
            Make your dream business goal come true
          </h1>
          <p className="sub-heading md:w-7/12 mb-8 w-full">
            when you need us for improve your business, then come with us to
            help your business have reach it, you just sit and feel that goal
          </p>
          <button className="btn-primary mb-10">Start Project</button>
          <Image src={HeroImage} alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
