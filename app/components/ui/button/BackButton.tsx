"use client";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Button
      placeholder={""}
      onClick={handleGoBack}
      className="text-white text-sm flex items-center gap-1 rounded-lg"
    >
      <IoMdArrowBack className="text-white w-4 h-4" />
      <p>Back</p>
    </Button>
  );
}
