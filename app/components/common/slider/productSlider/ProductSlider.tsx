"use client";
import React, { useState } from "react";
import "./productSlider.css";
import Image from "next/image";
import { Button, IconButton } from "@material-tailwind/react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";
import ImageModal from "../../modals/ImageModal/ImageModal";

const ProductSlider: React.FC = () => {
  const [images, setImages] = useState([
    {
      img: "https://i.ibb.co/XynJ3CP/Mac-Book-Air-M2-Starlight-2636.jpg",

      color: "#F0E5D3",
    },
    {
      img: "https://i.ibb.co/vZNzHd0/Mac-Book-Air-M2-Space-Gray-5005-1.jpg",
      color: "#7D7E80",
    },
    {
      img: "https://i.ibb.co/g7CwXHW/Mac-Book-Air-M2-Silver-8305.jpg",

      color: "#E3E4E6",
    },
    {
      img: " https://i.ibb.co/txC8zD1/Mac-Book-Air-M2-Midnight-8137.jpg",

      color: "#2E3641",
    },
  ]);

  const [activeImg, setActiveImage] = useState(images[0].img);
  const [activeColor, setActiveColor] = useState(images[0].color);
  const [amount, setAmount] = useState(1);

  const handleColorClick = (imgUrl: string, color: string) => {
    setActiveImage(imgUrl); // Update activeImg directly to the imgUrl
    setActiveColor(color);
  };

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: "auto", spacing: 15 },
      },
      "(min-width: 1000px)": {
        slides: { perView: "auto", spacing: 20 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col justify-center items-center gap-6 lg:w-2/4">
        {/* Image Animation */}
        <motion.div
          key={activeImg} // Add a key to ensure Framer Motion properly detects changes
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
        >
          {/* <Image
            src={activeImg}
            alt=""
            width={500}
            height={500}
            className="w-9/12 md:w-[300px] lg:w-[400px] aspect-square object-cover rounded-xl"
          /> */}
          <ImageModal imageUrl={activeImg} />
        </motion.div>
        {/* Keen Slider */}
        <div
          ref={sliderRef}
          className="keen-slider bg-[#f5a] bg-opacity-5 p-2 rounded-md"
        >
          {images.map((image, index) => (
            <div key={index} className="keen-slider__slide">
              <motion.div
                whileHover={{ scale: 0.9 }} // Add a Framer Motion animation
                whileTap={{ scale: 0.5 }}
              >
                <Image
                  src={image.img}
                  alt=""
                  width={600}
                  height={600}
                  className={`w-24 h-24 rounded-md cursor-pointer object-cover ${
                    activeImg === image.img
                      ? "border border-[#f5a]"
                      : "hover:bg-gray-50 hover:bg-opacity-50"
                  }`}
                  onClick={() => handleColorClick(image.img, image.color)}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <div className="flex flex-row gap-3 items-center">
            <FaApple className="" />
            <span className="text-black font-semibold">Apple</span>
          </div>
          <h1 className="text-xl font-bold">
            MacBook Pro M1 Pro 14-inch 10-CPU 16-GPU
          </h1>
        </div>
        <div className=" flex items-center flex-wrap gap-5 md:gap-7 space-y-0">
          <p className="text-gray-900 bg-gray-100 px-2 py-1 rounded-md flex item-center gap-3 md:gap-5 text-[12px] md:text-[14px]">
            Cash Discount Price:{" "}
            <span className="line-through text-gray-900">9999 &#2547;</span>
            <span className="font-bold text-black">81000 &#2547;</span>
          </p>
          <p className="text-gray-900 bg-gray-100 px-2 py-1 rounded-md flex item-center gap-3 md:gap-5 text-[12px] md:text-[14px]">
            Status: <span className="font-bold text-black">In Stock</span>
          </p>
          <p className="text-gray-900 bg-gray-100 px-2 py-1 rounded-md flex item-center gap-3 md:gap-5 text-[12px] md:text-[14px]">
            Product Code: <span className="font-bold text-black">KFce</span>
          </p>
        </div>
        <h6 className="text-lg">Apple Store 1 Year Warranty Support</h6>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-gray-900 bg-gray-100 px-2 py-1 rounded-md flex item-center gap-3 md:gap-5 text-[12px] md:text-[14px]">
            Color:{" "}
            {images.map((image, index) => (
              <span
                key={index}
                style={{ backgroundColor: image.color }}
                onClick={() => handleColorClick(image.img, image.color)}
                className={`cursor-pointer ${
                  activeColor === image.color
                    ? "border border-[#f5a] shadow shadow-[#f5a] rounded-full p-3"
                    : "border border-gray-700 rounded-full p-3"
                }`}
              ></span>
            ))}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <p className="text-gray-900 bg-gray-100 px-2 py-1 rounded-md flex item-center gap-3 md:gap-5 text-[12px] md:text-[14px]">
            Storage:{" "}
            <Button
              placeholder={""}
              className="bg-[#f5a] px-2 py-1 text-[10px] md:text-[13px] font-normal"
            >
              16 / 256
            </Button>
            <Button
              placeholder={""}
              className="bg-[#f5a] px-2 py-1 text-[10px] md:text-[13px] font-normal"
            >
              16 / 512
            </Button>
            <Button
              placeholder={""}
              className="bg-[#f5a] px-2 py-1 text-[10px] md:text-[13px] font-normal"
            >
              16 / 1TB
            </Button>
            <Button
              placeholder={""}
              className="bg-[#f5a] px-2 py-1 text-[10px] md:text-[13px] font-normal"
            >
              32 / 1TB
            </Button>
          </p>
        </div>

        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <IconButton
              placeholder={""}
              className="bg-gray-200 md:py-2 py-1 px-4 md:px-4 rounded-none text-[#f5a] text-2xl border border-[#f5a]"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </IconButton>
            <span className="bg-gray-200 md:py-2 py-1 mx-2 md:px-4 rounded-none">
              {amount}
            </span>
            <IconButton
              placeholder={""}
              className="bg-gray-200 md:py-2 py-1 px-4 md:px-4 rounded-none text-[#f5a] text-2xl border border-[#f5a]"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </IconButton>
          </div>
          <div className="flex items-center gap-3 md:gap-5 justify-center">
            <Button
              size="sm"
              placeholder={""}
              className="bg-[#F5A] whitespace-nowrap px-5 py-2.5 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal"
            >
              B<span className="lowercase">y</span> N
              <span className="lowercase">ow</span>
            </Button>
            <Button
              size="sm"
              placeholder={""}
              className="bg-white text-[#f5a] border border-[#f5a] whitespace-nowrap px-3 py-2 rounded text-[10px] md:text-[12px] lg:text-[14px] font-normal"
            >
              A<span className="lowercase">dd</span>t
              <span className="lowercase">o</span> C
              <span className="lowercase">ard</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
