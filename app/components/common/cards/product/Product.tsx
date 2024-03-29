"use client";
import { Button, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface ProductProps {}

export const Product: React.FC<ProductProps> = () => {
  return (
    <div className="border rounded-md h-full flex items-center flex-col justify-center p-2 relative transition duration-300 ease-in-out hover_shadow shadow-sm cursor-pointer">
      <Link href={"/products/productDetails"} className="">
        <Image
          width={1000}
          height={1000}
          className="w-[150px]"
          src={
            "https://i.ibb.co/Q97KdgY/Apple-Watch-Ultra-Titanium-Case-with-Alpine-Loop-Orange-a-4706.jpg"
          }
          alt="Product Image"
        />
      </Link>
      <div className="mt-5 text-gray-800">
        <h3 className="text-[12px] md:text-[14px] text-center shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px]">
          Apple Watch Ultra 2 with Alpine Loop GPS + Cellular
        </h3>
        <div className="flex gap-2 items-center justify-center py-3">
          <span className="line-through text-[12px] md:text-[14px] text-gray-900 hover:text-[#f5a]">
            &#2547; 9999
          </span>
          <span className="text-[12px] md:text-[14px] hover:text-[#f5a]">
            &#2547; 81000
          </span>
          <IconButton
            placeholder={""}
            className="text-[10px] md:text-[12px] text-[#f5a] bg-white shadow-none hover:shadow-none"
          >
            <FaHeart size={15} />
          </IconButton>
        </div>

        <div className="flex items-center gap-3 mt-3 justify-center">
          <Button
            size="sm"
            placeholder={""}
            className="bg-[#F5A] whitespace-nowrap px-2 py-1 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal"
          >
            B<span className="lowercase">y</span> N
            <span className="lowercase">ow</span>
          </Button>
          <Button
            size="sm"
            placeholder={""}
            className="bg-white text-[#f5a] border border-[#f5a] whitespace-nowrap px-2 py-1 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal"
          >
            A<span className="lowercase">dd</span>
            {""} t<span className="lowercase">o</span> C
            <span className="lowercase">ard</span>
          </Button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <span className="bg-[#f5a] px-2 py-1 text-gray-50 text-[10px] md:text-[12px]">
          20% OFF
        </span>
      </div>
    </div>
  );
};
