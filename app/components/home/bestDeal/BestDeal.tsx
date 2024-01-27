import React from "react";
import Image from "next/image";
import Title from "@/app/components/ui/title/Title";
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
  return (
    <div>
      <Title title={"Best Deal -"} />
      <section className="flex flex-row md:items-center justify-between gap-5 overflow-x-auto shadow rounded p-2 md:p-4">
        {bestDeals.map((item) => (
          <div
            className="flex flex-col items-center gap-2 rounded-md w-[200px]"
            key={item.id}
          >
            <Image
              className="rounded-2xl w-[100px h-[70px] md:w-full md:h-full"
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
      </section>
    </div>
  );
};

export default BestDeal;
