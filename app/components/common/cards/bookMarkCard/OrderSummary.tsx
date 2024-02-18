"use client";
import Title from "@/app/components/ui/title/Title";
import { Button } from "@material-tailwind/react";
import React from "react";

export default function OrderSummary() {
  return (
    <div className="w-full md:w-4/12 flex flex-col">
      <Title title={"Order Summary"} />
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2">
          <span className="flex items-center gap-2">
            <p className="font-semibold text-sm">Sub-Total {"(2 items)"}:</p>{" "}
            BDT {300000}
          </span>
          <span className="flex items-center gap-2">
            {" "}
            <p className="font-semibold text-sm">Delivery Charge:</p> (will be
            added)
          </span>
          <span className="flex items-center gap-2">
            {" "}
            <p className="font-semibold text-sm">Total Discount:</p> 0{" "}
          </span>
          <span className="flex items-center gap-2">
            <p className="font-semibold text-sm">Total :</p> BDT 300000{" "}
          </span>
        </div>
        <div className="flex flex-row gap-3 items-center mt-5">
          <input
            className="px-2 py-2 text-gray-700 placeholder:text-gray-700 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal outline-none focus:outline-none border border-gray-400"
            type="text"
            placeholder="Enter voucher code"
          />
          <Button
            placeholder={""}
            className="bg-[#F5A] whitespace-nowrap px-3 py-2 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal"
          >
            Apply
          </Button>
        </div>
        <Button
          placeholder={""}
          className="bg-[#F5A] whitespace-nowrap px-2 py-1 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal mt-5"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
