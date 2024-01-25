"use client";
import WebsiteModal from "./components/common/modals/WebsiteModal";
import Banner from "./components/banner/Banner";
import BestDeal from "./components/home/bestDeal/BestDeal";
import Testimonial from "./components/home/testimonial/Testiminial";
import NewArrival from "./components/home/Arrival/NewArrival";
import FeaturesProducts from "./components/home/features/FeaturesProducts";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <BestDeal />
        <NewArrival />
        <FeaturesProducts />
        <Testimonial />
      </div>
      <WebsiteModal />
    </main>
  );
}
