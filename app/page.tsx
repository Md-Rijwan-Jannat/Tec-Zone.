"use client";
import Image from "next/image";
import WebsiteModal from "./components/modals/WebsiteModal";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
        <h1 className="text-4xl text-center text-[#F5A]">Coming soon more!</h1>
      </div>
      <WebsiteModal />
    </main>
  );
}
