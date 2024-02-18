"use client";
import Icon from "@/app/components/ui/icon/Icon";
import { IconButton } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaApple, FaTrash } from "react-icons/fa";

interface BookMarkCardProps {}

const BookMarkCard: React.FC<BookMarkCardProps> = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="flex items-center bg-white shadow-md border px-2 py-4 justify-between gap-3 w-full">
      <div>
        <Image
          className="w-[100px] rounded"
          width={1000}
          height={1000}
          src={
            "https://i.ibb.co/Q97KdgY/Apple-Watch-Ultra-Titanium-Case-with-Alpine-Loop-Orange-a-4706.jpg"
          }
          alt="Bookmark"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 items-center text-[14px]">
          {" "}
          <FaApple size={15} /> <span>Apple</span>
        </div>
        <span>Apple Watch Ultra Titanium</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[#f5a]">৳ 97000</span>
        <div className="flex flex-row items-center gap-2">
          <IconButton
            size="sm"
            placeholder={""}
            className="bg-gray-200  py-1 px-2 rounded-none text-[#f5a] text-2xl border border-[#f5a]"
            onClick={() => setAmount((prev) => prev - 1)}
          >
            -
          </IconButton>
          <span className="bg-gray-200 py-1 px-2 rounded-none">{amount}</span>
          <IconButton
            size="sm"
            placeholder={""}
            className="bg-gray-200  py-1 px-2 rounded-none text-[#f5a] text-2xl border border-[#f5a]"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            +
          </IconButton>
        </div>
      </div>
      <div>
        <Icon icon={<FaTrash size={20} />} />
      </div>
    </div>
  );
};
export default BookMarkCard;
