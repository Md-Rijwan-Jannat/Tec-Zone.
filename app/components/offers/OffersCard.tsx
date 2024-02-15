"use client";
import React from "react";
import {
  Typography,
  Tooltip,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import {
  FaArrowAltCircleDown,
  FaCalendar,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const OffersCard: React.FC = () => {
  return (
    <div>
      <div className="w-full xl:w-[350px] border hover_shadow">
        <div className="h-80 relative">
          <Image
            width={700}
            height={700}
            src="https://i.ibb.co/6yQxbFr/samsung-offers.webp"
            alt="profile-picture"
          />
          <div
            className="absolute top-0 right-0
      "
          >
            <span className="bg-[#f5a] px-2 py-1 text-gray-50 text-[10px] md:text-[12px]">
              20% OFF
            </span>
          </div>
        </div>
        <div className="text-center relative z-50 p-2">
          <Typography
            placeholder={""}
            color="blue-gray"
            className="mb-2 flex gap-2 items-center text-sm font-normal justify-center mt-5"
          >
            <FaCalendar className="w-4 h-4" />
            <span>
              February{" "}
              <sup>
                21<sup>st</sup>
              </sup>{" "}
              to March{" "}
              <sup>
                2<sup>nd</sup>
              </sup>
            </span>
          </Typography>
          <Typography
            placeholder={""}
            variant="h4"
            color="blue-gray"
            className="mb-2"
          >
            Get the latest Samsung smartphones at unbeatable prices.
          </Typography>
          <Typography
            placeholder={""}
            color="blue-gray"
            className="font-medium"
            textGradient
          >
            Upgrade your mobile experience with Samsung is flagship smartphones,
            now available at discounted rates!
          </Typography>
          <div className="flex items-center justify-center my-5">
            <Button
              placeholder={""}
              className="flex items-center justify-center gap-3 px-3 py-2 bg-[#f5a] rounded w-36"
              size="sm"
            >
              <FaArrowAltCircleDown strokeWidth={2} className="h-4 w-4" /> Learn
              more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
