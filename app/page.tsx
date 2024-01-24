"use client";
import Image from "next/image";
import WebsiteModal from "./components/modals/WebsiteModal";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <main>
      <div>
        <Banner />
      </div>
      <WebsiteModal />
    </main>
  );
}
