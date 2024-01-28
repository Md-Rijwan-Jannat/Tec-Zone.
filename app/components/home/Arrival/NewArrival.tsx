"use client";
import React from "react";
import Title from "../../ui/title/Title";
import { ArrivalSlider } from "../../common/slider/arrivalSlider/ArrivalSlider";

interface NewArrivalProps {}
export const NewArrival: React.FC<NewArrivalProps> = () => {
  return (
    <div>
      <Title title={"New Arrival -"} />
      <section>
        <ArrivalSlider sliderId={"first"} />
      </section>
    </div>
  );
};
