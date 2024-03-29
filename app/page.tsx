"use client";
import WebsiteModal from "./components/common/modals/WebsiteModal";
import Banner from "./components/banner/Banner";
import BestDeal from "./components/home/bestDeal/BestDeal";
import Testimonial from "./components/home/testimonial/Testimonial";
import { FeaturesProducts } from "./components/home/features/FeaturesProducts";
import { Products } from "./components/home/products/Products";
import { margin_top } from "./components/common/container/container";

export default function Home() {
  return (
    <main>
      <div className={`${margin_top} overflow-x-hidden`}>
        <Banner />
        <BestDeal />
        <FeaturesProducts />
        <Products />
        <Testimonial />
      </div>
      <WebsiteModal />
    </main>
  );
}
