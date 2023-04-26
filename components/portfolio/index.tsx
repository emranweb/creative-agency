import React from "react";
import PortfolioList from "./PortfolioList";

const Portfolio = () => {
  return (
    <div className="pt-32">
      <div className="container mx-auto text-center">
        <div>
          <h2 className="section-heading text-center mb-5">Our Portfolio</h2>
          <h3 className="heading-2 text-center mb-8">What do we do</h3>
          <p className="text w-6/12 mx-auto text-center">
            all projects that we have already done , proven can help to use more
            comfortable, then can used by client from our business
          </p>
        </div>
        <div>
          <PortfolioList />
        </div>
        <button className="btn-outline ">See All Portfolio</button>
      </div>
    </div>
  );
};

export default Portfolio;
