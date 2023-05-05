import Image from "next/image";
import React from "react";
import ContactImage from "@/public/contact-image.png";

const Contact = () => {
  return (
    <div className="lg:py-40 py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div className="md:w-6/12 mt-8 w-full">
            <h3 className="heading-2 md:w-6/12 mb-4 w-full ">
              Interesting Collaboration With Us?
            </h3>
            <p className="text mb-8">Help you to reach your business goal</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="md:w-6/12 w-full">
            <Image src={ContactImage} alt="contact image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
