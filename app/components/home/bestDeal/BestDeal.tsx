import React, { useRef } from "react";
import Image from "next/image";
import Title from "@/app/components/ui/title/Title";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import {
  deal1,
  deal2,
  deal3,
  deal4,
  deal5,
  deal6,
  deal7,
  deal8,
} from "../../assets/bestDealLogo/bestDeal";

interface BestDealItem {
  id: string;
  image: any;
  name: string;
}

const bestDeals: BestDealItem[] = [
  { id: "1", image: deal1, name: "Laptop Offer" },
  { id: "2", image: deal2, name: "Desktop Deal" },
  { id: "3", image: deal3, name: "Under 999" },
  { id: "4", image: deal4, name: "Casing Deal" },
  { id: "5", image: deal5, name: "Flash Sale" },
  { id: "6", image: deal6, name: "Happy Hour" },
  { id: "7", image: deal7, name: "Product on " },
  { id: "8", image: deal8, name: "Bundle Offer" },
];

const BestDeal: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: "auto", spacing: 25 },
      },
      "(min-width: 1000px)": {
        slides: { perView: "auto", spacing: 35 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div>
      <Title title={"Best Deal -"} />
      <div ref={sliderRef} className="keen-slider">
        {bestDeals.map((item) => (
          <div className="keen-slider__slide text-center" key={item.id}>
            <Image
              className="rounded-2xl w-10/12"
              width={500}
              height={500}
              src={item.image}
              alt={item.name}
            />
            <span className="text-sm text-gray-600 whitespace-nowrap">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeal;
