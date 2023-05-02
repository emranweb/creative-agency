import Image from "next/image";
import React from "react";
import ContactImage from "@/public/contact-image.png";

const Contact = () => {
  return (
    <div className="py-40">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="w-6/12 mt-8">
            <h3 className="heading-2 w-6/12 mb-4">
              Interesting Collaboration With Us?
            </h3>
            <p className="text mb-8">Help you to reach your business goal</p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="w-6/12">
            <Image src={ContactImage} alt="contact image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
