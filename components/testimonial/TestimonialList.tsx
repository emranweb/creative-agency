import React from "react";
import SingleTestimonial from "./SingleTestimonial";

const TestimonialList = () => {
  return (
    <div className="flex justify-between gap-x-10">
      <SingleTestimonial />
      <SingleTestimonial />
      <SingleTestimonial />
    </div>
  );
};

export default TestimonialList;
