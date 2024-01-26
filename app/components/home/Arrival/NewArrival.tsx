// TestimonialSection.tsx
import React, { useEffect } from "react";
import KeenSlider from "keen-slider";

import "keen-slider/keen-slider.min.css"; // Import KeenSlider styles
import Title from "../../ui/title/Title";
import { Button } from "@material-tailwind/react";
import ArrivalCard from "./ArrivalCard";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface TestimonialSectionProps {}

const TestimonialSection: React.FC<TestimonialSectionProps> = () => {
  useEffect(() => {
    const keenSlider = new KeenSlider(".keen-slider", {
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
            perView: 2, // 2 items per view on small devices
            spacing: 16,
          },
        },
        "(min-width: 768px)": {
          slides: {
            origin: "auto",
            perView: 3, // 3 items per view on medium devices
            spacing: 32,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 4, // 4 items per view on large devices
            spacing: 32,
          },
        },
        "(min-width: 1280px)": {
          slides: {
            origin: "auto",
            perView: 5, // 5 items per view on extra-large devices
            spacing: 32,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious?.addEventListener("click", () => keenSlider.prev());
    keenSliderNext?.addEventListener("click", () => keenSlider.next());

    return () => {
      keenSlider.destroy();
    };
  }, []);

  return (
    <div>
      <Title title={"New Arrival -"} />
      <section className="">
        <div className=" px-2">
          <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <div className="mt-8 flex gap-4 lg:mt-0">
              <Button
                placeholder={""}
                aria-label="Previous slide"
                id="keen-slider-previous"
                className="rounded-full border border-[#F5A]  bg-white p-3 text-[#F5A] transition hover:bg-[#F5A] hover:text-white"
              >
                <FaArrowCircleLeft size={20} />
              </Button>

              <Button
                placeholder={""}
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-[#F5A]  bg-white p-3 text-[#F5A] transition hover:bg-[#F5A] hover:text-white"
              >
                <FaArrowCircleRight size={20} />
              </Button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full w-full flex-col justify-between bg-white p-2">
                  <div className="rounded-md">
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
