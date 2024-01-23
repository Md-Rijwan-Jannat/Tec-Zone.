import { IconButton } from "@material-tailwind/react";
import React from "react";
import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";

export const SocialLogin = () => {
  return (
    <div className="flex items-center gap-3 justify-center mt-5">
      <IconButton
        placeholder={""}
        className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
      >
        <BsGoogle size={20} />
      </IconButton>
      <IconButton
        placeholder={""}
        className="rounded bg-[#3593ea] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
      >
        <BsFacebook size={20} />
      </IconButton>
      <IconButton
        placeholder={""}
        className="rounded bg-[#060202] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
      >
        <BsGithub size={20} />
      </IconButton>
    </div>
  );
};
