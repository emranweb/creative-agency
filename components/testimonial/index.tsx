import React from "react";
import TestimonialList from "./TestimonialList";

const Testimonial = () => {
  return (
    <div className="pt-44">
      <div className="container mx-auto px-4">
        <div className="">
          <h2 className="section-heading text-center mb-5">Testimonial</h2>
          <h3 className="heading-2 text-center mb-14">People Talk about us</h3>
          <TestimonialList />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
