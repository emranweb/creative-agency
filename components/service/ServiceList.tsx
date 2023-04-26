import React from "react";
import SingleService from "./SingleService";
import { FaDesktop } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiPenTool } from "react-icons/fi";
import { MdMonitorHeart } from "react-icons/md";

const ServiceList = () => {
  return (
    <div className="flex flex-wrap gap-10 pl-8">
      <SingleService
        icon={<FaDesktop />}
        text="Social Media
Management"
        color="bg-[#377DFF]"
      />
      <SingleService
        icon={<AiFillSetting />}
        text="Search Engine
        Opimization"
        color="bg-[#FF2D2D]"
      />
      <SingleService icon={<FiPenTool />} text="Design" color="bg-[#7CE761]" />
      <SingleService
        icon={<MdMonitorHeart />}
        text="Ads"
        color="bg-[#FFA800]"
      />
    </div>
  );
};

export default ServiceList;
