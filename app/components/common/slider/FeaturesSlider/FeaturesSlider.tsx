// Slider.tsx
import React, { useEffect } from "react";
import KeenSlider from "keen-slider";

import "keen-slider/keen-slider.min.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import { FeaturesCard } from "../../cards/features/FeaturesCard";

interface FeaturesSliderProps {
  sliderId: any;
}
interface Product {
  image: any;
  product_name: any;
  description: any;
}

const productData: Product[] = [
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description: "https://i.ibb.co/GdsDfCt/i-Phone-14-Blue-7810.jpg",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "I Phone 14 Blue",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "Galaxy S23 Ultra 5G",
    description:
      "A powerful 5G smartphone with a stunning display and advanced camera features.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "iPhone 15 Pro Max",
    description:
      "A popular iPhone with a dual-camera system, A13 Bionic chip, and a Liquid Retina display.",
  },
  {
    image: "https://i.ibb.co/zxD4zhh/Valentine-Bundle-24-W-7071.jpg",
    product_name: "I Phone 15 pro",
    description:
      "A popular iPhone with a dual-camera system, A13 Bionic chip, and a Liquid Retina display.",
  },
];

export const FeaturesSlider: React.FC<FeaturesSliderProps> = ({ sliderId }) => {
  useEffect(() => {
    const keenSliderElement = document.getElementById(
      `keen-slider-${sliderId}`
    );
    if (!keenSliderElement) return;

    const keenSlider = new KeenSlider(keenSliderElement, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            origin: "auto",
            perView: 2,
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "auto",
            perView: 3,
            spacing: 32,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 4,
            spacing: 32,
          },
        },
        "(min-width: 1280px)": {
          slides: {
            origin: "auto",
            perView: 5,
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById(
      `keen-slider-previous-${sliderId}`
    ) as HTMLButtonElement;
    const keenSliderNext = document.getElementById(
      `keen-slider-next-${sliderId}`
    ) as HTMLButtonElement;

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, [sliderId]);

  return (
    <div className="px-2">
      <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
        <div className="mt-2 flex gap-4 lg:mt-0">
          <Button
            placeholder={""}
            aria-label="Previous slide"
            id={`keen-slider-previous-${sliderId}`}
            className="rounded-full border border-[#F5A] bg-white p-3 text-[#F5A] transition hover:bg-[#F5A] hover:text-white"
          >
            <FaArrowCircleLeft size={20} />
          </Button>

          <Button
            placeholder={""}
            aria-label="Next slide"
            id={`keen-slider-next-${sliderId}`}
            className="rounded-full border border-[#F5A] bg-white p-3 text-[#F5A] transition hover:bg-[#F5A] hover:text-white"
          >
            <FaArrowCircleRight size={20} />
          </Button>
        </div>
      </div>

      <div className="-mx-6 mt-2 lg:col-span-2 lg:mx-0">
        <div id={`keen-slider-${sliderId}`} className="keen-slider">
          {productData.map((product, index) => (
            <div key={index} className="keen-slider__slide">
              <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                <div className="rounded-md">
                  <FeaturesCard
                    image={product.image}
                    product_name={product.product_name}
                    description={product.description}
                  />
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
