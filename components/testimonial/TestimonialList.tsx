import React from "react";
import SingleTestimonial from "./SingleTestimonial";

const TestimonialList = () => {
  return (
    <div className="flex  md:flex-wrap justify-between md:gap-x-3 gap-x-10">
      <SingleTestimonial />
      <SingleTestimonial />
      <SingleTestimonial />
    </div>
  );
};

export default TestimonialList;
