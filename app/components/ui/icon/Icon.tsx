import React, { ReactNode } from "react";
import { IconButton } from "@material-tailwind/react";

interface IconProps {
  icon: ReactNode;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <IconButton className="text-[#F5A] bg-gray-400" placeholder={""}>
      {icon}
    </IconButton>
  );
};

export default Icon;
