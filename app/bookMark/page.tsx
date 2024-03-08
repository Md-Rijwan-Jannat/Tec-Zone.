"use client";
import React from "react";
import Title from "../components/ui/title/Title";
import { margin_top } from "../components/common/container/container";
import BookMarkCard from "../components/common/cards/bookMarkCard/BookMarkCard";
import OrderSummary from "../components/common/cards/bookMarkCard/OrderSummary";

export default function BookMark() {
  return (
    <div className={margin_top}>
      <section className="flex flex-col-reverse xl:flex-row gap-5 md:gap-10 mb-10">
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
        <OrderSummary />
      </section>
    </div>
  );
}
