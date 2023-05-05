import React from "react";
import SingleTestimonial from "./SingleTestimonial";

const TestimonialList = () => {
  return (
    <div className="flex md:gap-x-4 lg:gap-x-2 flex-wrap justify-between gap-y-4">
      <SingleTestimonial />
      <SingleTestimonial />
      <SingleTestimonial />
    </div>
  );
};

export default TestimonialList;
