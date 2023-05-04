import React from "react";
import SinglePortfolio from "./SinglePortfolio";

const PortfolioList = () => {
  return (
    <div
      className="flex flex-wrap md:justify-between gap-y-4 justify-center
     mt-16 mb-10"
    >
      <SinglePortfolio bg="bg-porfolioImage1" text="Design Byte App" />
      <SinglePortfolio bg="bg-porfolioImage2" text="Cloud App" />
      <SinglePortfolio bg="bg-porfolioImage3" text="Design Furniture App" />
    </div>
  );
};

export default PortfolioList;
