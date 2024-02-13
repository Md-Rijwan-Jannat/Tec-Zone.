import React from "react";
import { OffersCard } from "../components/offers/OffersCard";
import { margin_top } from "../components/common/container/container";

const Offers: React.FC = () => {
  return (
    <div className={margin_top}>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
        <OffersCard />
      </section>
    </div>
  );
};
export default Offers;
