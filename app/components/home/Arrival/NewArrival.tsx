// TestimonialSection.tsx
import React, { useEffect } from "react";
import KeenSlider from "keen-slider";

import "keen-slider/keen-slider.min.css"; // Import KeenSlider styles
import Title from "../../ui/title/Title";
import { Button } from "@material-tailwind/react";
import ArrivalCard from "./ArrivalCard";

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
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 2.5,
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Button>

              <Button
                placeholder={""}
                aria-label="Next slide"
                id="keen-slider-next"
                className="rounded-full border border-[#F5A]  bg-white p-3 text-[#F5A] transition hover:bg-[#F5A] hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    {/* Arrival Card here */}
                    <ArrivalCard />
                  </div>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
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
