import Link from "next/link";
import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="pt-16">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-2/12">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="w-8/12">
            <ul className="flex justify-center">
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
          <div className="w-2/12">
            <button className="btn-outline">Contact us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
