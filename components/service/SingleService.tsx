import React from "react";

type ServicePropsType = {
  icon: JSX.Element;
  text: string;
  color: string;
};

const SingleService = ({ icon, text, color }: ServicePropsType) => {
  return (
    <div className="rounded-[30px] bg-white border border-black/10 shadow-md w-[calc(50%-40px)] text-center px-6 py-8">
      <div
        className={`${color} inline-block p-7 text-[40px] text-white rounded-full mb-7`}
      >
        {icon}
      </div>
      <p className="card-title">{text}</p>
    </div>
  );
};

export default SingleService;
