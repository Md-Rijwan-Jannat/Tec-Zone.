"use client";
import React from "react";
import Title from "../components/ui/title/Title";
import BookMarkCard from "../components/common/cards/bookMarkCard/BookMarkCaed";
import { margin_top } from "../components/common/container/container";
import { Button } from "@material-tailwind/react";

export default function BookMark() {
  return (
    <div className={margin_top}>
      <section className="flex flex-col-reverse xl:flex-row gap-5 md:gap-10">
        <div className="flex flex-col w-full md:w-8/12">
          <Title title={"Shopping Card"} />
          <div className="flex flex-col items-start gap-5">
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
            <BookMarkCard />
          </div>
        </div>
        <div className="w-full md:w-4/12 flex flex-col">
          <Title title={"Billing"} />
          <div className="flex flex-col">
            <span className="flex items-center gap-2">
              <p className="font-semibold text-sm">Sub-Total: BDT</p> {300000}
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
            <Button
              placeholder={""}
              className="bg-[#F5A] whitespace-nowrap px-2 py-1 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal mt-5"
            >
              Checkout
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
