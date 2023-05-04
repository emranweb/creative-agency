import React from "react";

type SinglePortfolioProps = {
  bg: string;
  text: string;
};

const SinglePortfolio = ({ bg, text }: SinglePortfolioProps) => {
  return (
    <div
      className={`${bg} w-full max-w-[350px] lg:w-[350px] h-[350px] rounded-[30px] px-6 py-4 flex items-end hover:scale-105 transition`}
    >
      <h3 className="text-2xl font-bold text-left text-white">{text}</h3>
    </div>
  );
};

export default SinglePortfolio;
