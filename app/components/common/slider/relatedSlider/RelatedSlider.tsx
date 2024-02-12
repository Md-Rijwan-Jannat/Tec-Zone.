// Slider.tsx
"use client";
import React, { useEffect } from "react";
import KeenSlider from "keen-slider";

import "keen-slider/keen-slider.min.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
import RelatedCard from "../../cards/relatedProduct/RelatedCard";

interface RelatedSliderProps {
  sliderId: any;
}
export const RelatedSlider: React.FC<RelatedSliderProps> = ({ sliderId }) => {
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
    <div className="px-2 mb-5 md:mb-10">
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
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
          <div className="keen-slider__slide">
            <blockquote className="flex h-full w-8/12 md:w-full flex-col justify-between bg-white p-2">
              <div className="rounded-md">
                <RelatedCard />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};
