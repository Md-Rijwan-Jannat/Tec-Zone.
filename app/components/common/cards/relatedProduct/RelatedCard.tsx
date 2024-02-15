"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RelatedCardProps {
  // Define any props if needed
}

const RelatedCard: React.FC<RelatedCardProps> = () => {
  return (
    <div className="flex items-center p-2 border flex-col justify-center relative rounded-md hover_shadow">
      <Link href={"/products/productDetails"}>
        <Image
          width={600}
          height={600}
          className="rounded mb-3 w-[100px] md:w-[150px]"
          src={
            "https://i.ibb.co/Q97KdgY/Apple-Watch-Ultra-Titanium-Case-with-Alpine-Loop-Orange-a-4706.jpg"
          }
          alt="related product"
        />
      </Link>
      <div className="mt-5 text-gray-800">
        <h3 className="text-[12px] md:text-sm text-center shadow-[rgba(0, 0, 0, 0.24) 0px 3px 8px]">
          Apple Watch Ultra 2 with Alpine Loop GPS + Cellular
        </h3>
        <div className="flex gap-2 items-center justify-center py-3">
          <span className="line-through text-[12px] md:text-sm text-gray-900 hover:text-[#f5a]">
            &#2547; 9999
          </span>
          <span className="text-[12px] md:text-sm hover:text-[#f5a]">
            &#2547; 81000
          </span>
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

export default RelatedCard;
