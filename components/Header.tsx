import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center flex-wrap">
          <div className="md:w-2/12 w-6/12 order-1 ">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="md:w-8/12 w-full order-3 mt-4 md:mt-0">
            <ul className="flex md:justify-center justify-start">
              <li className="nav-link font-bold">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-link">
                <Link href="/">About</Link>
              </li>
              <li className="nav-link">
                <Link href="/">Service</Link>
              </li>
              <li className="nav-link">
                <Link href="/">Projects</Link>
              </li>
            </ul>
          </div>
          <div className="md:w-2/12 w-6/12 order-2 md:order-4">
            <button className="btn-outline">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
