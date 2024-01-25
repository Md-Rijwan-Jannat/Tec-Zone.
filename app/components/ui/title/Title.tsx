import React, { ReactNode } from "react";

interface TitleProps {
  title: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="text-sm md:text-lg lg:text-2xl xl:text-3xl text-[#F5A] mt-8 mb-5 md:mt-10 md:mb-7 lg:mt-12 lg:mb-8 xl:mt-16 xl:mb-8">
      {title}
      <div className="border-b border-[#f573b4] w-[5rem]"></div>
    </div>
  );
};

export default Title;
