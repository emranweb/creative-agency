import Link from "next/link";
import React from "react";
import FooterLogo from "@/public/footer-logo.svg";
import Image from "next/image";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#383638] pt-32 pb-8">
      <div className="container mx-auto px-4">
        <div className="">
          <div className="flex mb-20 flex-wrap">
            <div className="lg:w-2/12 md:w-4/12 w-full mb-12 lg:mb-0">
              <Image src={FooterLogo} alt="logo" />
            </div>

            <div className="lg:w-2/12 md:w-4/12 w-full mb-12 lg:mb-0">
              <h4 className="text-[22px] font-bold text-left text-white mb-4">
                Terms & policies
              </h4>
              <p className="text-lg text-left text-white flex flex-col leading-9">
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
              </p>
            </div>
            <div className="lg:w-2/12 md:w-4/12 w-full">
              <h4 className="text-[22px] font-bold text-left text-white mb-4">
                Company
              </h4>
              <p className="text-lg text-left text-white leading-9 flex flex-col">
                <Link href="/">Home</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Contact Us</Link>
              </p>
            </div>
            <div className="lg:w-3/12 md:w-4/12 w-full mb-12 lg:mb-0">
              <h4 className="text-[22px] font-bold text-left text-white mb-4">
                Contact
              </h4>
              <p className="text-lg text-left text-white leading-9">
                agecnycr@gmail.com <br />
                (+62) 893912392190
              </p>
            </div>
            <div className="w-3/12 mb-12 ">
              <h4 className="text-[22px] font-bold text-left text-white mb-4">
                Location
              </h4>
              <p className="text-lg text-left text-white leading-9 ">
                PT Osiris Real Estate Internasional Jl. KH. Wahid Hasyim Kel
                No.10D Jakarta, Indonesia <br /> team@OsirisRealEstate.com
              </p>
            </div>
          </div>
          <div className="md:w-6/12 mx-auto text-center w-full">
            <div className="flex gap-x-9 justify-center">
              <div className="bg-white text-black p-4 rounded-full inline-block text-[24px]">
                <FiFacebook />
              </div>
              <div className="bg-white text-black p-4 rounded-full inline-block text-[24px]">
                <FaInstagram />
              </div>
              <div className="bg-white text-black p-4 rounded-full inline-block text-[24px]">
                <AiFillLinkedin />
              </div>
              <div className="bg-white text-black p-4 rounded-full inline-block text-[24px]">
                <AiOutlineTwitter />
              </div>
            </div>
            <hr className="md:w-8/12 mx-auto my-4 w-full" />
            <p className="text-lg text-center text-white ">
              Copyright @ 2022 Agency Creative. All Right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
