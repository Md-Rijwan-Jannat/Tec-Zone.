import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner/banner1.webp";
import banner2 from "../assets/banner/banner2.png";
import banner5 from "../assets/banner/banner5.png";
import banner6 from "../assets/banner/banner6.webp";
import banner7 from "../assets/banner/banner7.webp";
import banner8 from "../assets/banner/banner8.webp";
import banner9 from "../assets/banner/banner9.webp";
import banner10 from "../assets/banner/banner10.webp";
import { Button } from "@material-tailwind/react";

// List of banner images
const bannerImages = [
  banner1,
  banner2,
  banner5,
  banner6,
  banner7,
  banner8,
  banner9,
  banner10,
];

export default function Banner() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative py-16 lg:pt-0 lg:flex-col lg:pb-0 mb-10">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          width={500}
          height={500}
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full mb-5"
          src={
            bannerImages[
              (currentBannerIndex - 1 + bannerImages.length) %
                bannerImages.length
            ]
          }
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Latest Release
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Explore the Latest Gadgets
            <br className="hidden md:block" />
            at Tec Zone{" "}
            <span className="inline-block text-deep-purple-accent-400">
              Tech Hub
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Discover a wide range of cutting-edge technology, from smartphones
            to smart home devices. Stay ahead with Tec Zone is latest releases
            and reviews.
          </p>

          <div className="flex items-center gap-3">
            <Button placeholder={""} className="bg-[#F5A]">
              <Link href="/">Get started</Link>
            </Button>
            <Button placeholder={""} className="bg-gray-50 text-gray-600">
              {" "}
              <Link href="/" aria-label="">
                Learn more
              </Link>{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
