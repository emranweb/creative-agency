import React from "react";
import ServiceList from "./ServiceList";
import { FiArrowRight } from "react-icons/fi";

const Service = () => {
  return (
    <div className="pt-56">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="lg:w-6/12 pt-12 md:pr-28 w-full pr-0">
            <h2 className="section-heading mb-7">Our Services</h2>
            <h3 className="heading-2 mb-4">Perfect and Fast Movement</h3>
            <p className="text mb-9">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>

            <button className="btn-link flex gap-2 items-center ml-auto md:mb-10">
              Read more <FiArrowRight className="text-xl" />
            </button>
          </div>
          <div className="lg:w-6/12 w-full">
            <ServiceList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
