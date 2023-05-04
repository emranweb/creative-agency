import Image from "next/image";
import React from "react";
import TestimonialImage from "@/public/about-image.png";

const About = () => {
  return (
    <div className="pt-32">
      <div className="container mx-auto px-4">
        <div className="">
          <h2 className="section-heading text-center mb-5">About Us</h2>
          <h3 className="heading-2 text-center mb-8">Our Teammate</h3>
          <div className="flex flex-wrap">
            <Image
              className="md:w-6/12 lg:pr-16 pr-0 w-full"
              src={TestimonialImage}
              alt="testimonial image"
            />
            <div className="md:w-6/12 w-full">
              <p className="text mt-8 mb-6">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
              <p className="text mb-8">
                We move with make a Creative Strategy for help your business
                goal, we help to improve your income by a services we have. make
                your content look interesting and make people look for your
                business
              </p>
              <div className="flex gap-3">
                <button className="btn-primary">About Us</button>
                <button className="btn-outline">Our Story</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
