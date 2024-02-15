"use client";
import Icon from "@/app/components/ui/icon/Icon";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";

interface BookMarkCardProps {}

const BookMarkCard: React.FC<BookMarkCardProps> = () => {
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
      <div>
        <span>Apple Watch Ultra Titanium</span>
      </div>
      <div>
        <span>Apple</span>
      </div>
      <div>
        <span>3 Items</span>
      </div>
      <div>
        <span>৳ 97000</span>
      </div>
      <div>
        <Icon icon={<FaTrash size={20} />} />
      </div>
    </div>
  );
};
export default BookMarkCard;
