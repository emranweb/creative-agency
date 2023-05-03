import Image from "next/image";
import React from "react";
import TestimonialImage from "@/public/testimonial-image.jpg";

const SingleTestimonial = () => {
  return (
    <div className="rounded-[20px] shadow-lg w-4/12 px-12 pt-12 pb-24 transition hover:shadow-xl md:w-[calc(50%-12px)]">
      <div className="flex gap-x-5 items-center mb-8">
        <Image
          className="rounded-full"
          src={TestimonialImage}
          alt="testimonial person"
        />
        <div>
          <h4 className="text-xl font-semibold text-left text-[#377dff]">
            Angel Rose
          </h4>
          <p className="opacity-50 text-[11px] text-left text-[#464646]">
            Creative Manager
          </p>
        </div>
      </div>
      <p className="opacity-80 text-lg text-left text-[#464646]">
        There are many variations passages of Lorem Ipsum majority some by words
        which dont look
      </p>
    </div>
  );
};

export default SingleTestimonial;
