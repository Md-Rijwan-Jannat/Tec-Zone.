"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react";
import { Product } from "../components/common/cards/product/Product";
import { margin_top } from "../components/common/container/container";
import FilterModal from "../components/common/modals/FilterModal";

interface IconProps {
  id: number;
  open: number;
}

const bg = "bg-[#f5a] bg-opacity-10 px-2 py-3";
const text = "text-black text-[12px] md:text-[14px] font-normal";

export default function ProductFilterPage() {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) =>
    setOpen((prevState) => (prevState === value ? 0 : value));

  const filter = (
    <>
      <div className={`${bg} text-start`}>
        <span className="text-sm">Price Range</span>
        <hr className="border-t-1 border-blue-gray-100 my-1" />
        <div className="flex gap-3 mt-2 md:mt-3">
          <input
            className="w-full outline-none placeholder:text-black text-black px-2 rounded"
            placeholder="0"
            type="number"
          />
          <input
            className="w-full outline-none placeholder:text-black px-2 text-black rounded"
            placeholder="0"
            type="number"
          />
        </div>
      </div>
      <Accordion
        className={`${bg}`}
        placeholder={""}
        open={open === 1}
        icon={<Icon id={1} open={open} />}
      >
        <AccordionHeader
          className={`${text}`}
          placeholder={""}
          onClick={() => handleOpen(1)}
        >
          Availability
        </AccordionHeader>
        <AccordionBody className={`flex flex-col items-start`} placeholder={""}>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox crossOrigin={""} className="text-[#F5A]" defaultChecked />{" "}
            In Stock
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox crossOrigin={""} className="text-[#F5A]" defaultChecked />{" "}
            In Online Order
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox crossOrigin={""} className="text-[#F5A]" defaultChecked />{" "}
            In Pre Order
          </span>
          .
        </AccordionBody>
      </Accordion>
      <Accordion
        className={`${bg}`}
        placeholder={""}
        open={open === 2}
        icon={<Icon id={2} open={open} />}
      >
        <AccordionHeader
          className={`${text}`}
          placeholder={""}
          onClick={() => handleOpen(2)}
        >
          Storage
        </AccordionHeader>
        <AccordionBody className={`flex flex-col items-start`} placeholder={""}>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            16 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            32 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            64 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            128 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            256 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            512 GP
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            1 TB
          </span>
        </AccordionBody>
      </Accordion>
      <Accordion
        className={`${bg}`}
        placeholder={""}
        open={open === 3}
        icon={<Icon id={3} open={open} />}
      >
        <AccordionHeader
          className={`${text}`}
          placeholder={""}
          onClick={() => handleOpen(3)}
        >
          Type
        </AccordionHeader>
        <AccordionBody className={`flex flex-col items-start`} placeholder={""}>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            Active
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            Inactive
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            Regular Box
          </span>
          <span className={`${text} flex gap-1 items-center`}>
            <Checkbox
              crossOrigin={""}
              className="text-[#F5A] "
              defaultChecked
            />{" "}
            Sim Box
          </span>
        </AccordionBody>
      </Accordion>
    </>
  );

  function Icon({ id, open }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-3 w-3 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  return (
    <div className={`${margin_top}`}>
      <div className="flex items-center justify-start gap-2 mt-3 md:mt-5">
        <FaHome />
        <span>{" / " + "Monitor" + " / " + "Xiaomi"}</span>
      </div>
      <section className="text-[12px] md:text-[14px] text-black lg:flex flex-row gap-5 my-5 md:my-10 lg:my-16">
        <div className="w-[250px] h-full space-y-3 lg:block hidden">
          {filter}
        </div>
        <div className="w-full">
          <div
            className={`${bg} rounded w-full flex items-center justify-between font-semibold`}
          >
            <span className="lg:block hidden">{"Xiaomi"}</span>
            <FilterModal />
            <div className="flex items-center gap-2">
              <span>Sort by: </span>
              <div className="w-20 mr-32">
                <Select
                  style={{ color: "black" }}
                  placeholder={""}
                  label="Select"
                >
                  <Option>Default</Option>
                  <Option>Low to high</Option>
                  <Option>High to low</Option>
                </Select>
              </div>
            </div>
          </div>
          <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-2 md:gap-4`}
          >
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
      <div className="flex items-center gap-4 mt-5 md:mt-10 justify-center mb-10">
        <button
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#f5a] uppercase align-middle transition-all rounded-full select-none hover:bg-[#f5a]/10 active:bg-[#f5a]/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
          Previous
        </button>
        <div className="flex items-center gap-2">
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-[#f5a] transition-all hover:bg-[#f5a]/10 active:bg-[#f5a]/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              1
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-[#f5a] transition-all hover:bg-[#f5a]/10 active:bg-[#f5a]/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              2
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full bg-[#f5a] text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-[#f5a]/10 transition-all hover:shadow-lg hover:shadow-[#f5a]/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              3
            </span>
          </button>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-[#f5a] transition-all hover:bg-[#f5a]/10 active:bg-[#f5a]/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              4
            </span>
          </button>
        </div>
        <button
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-[#f5a] uppercase align-middle transition-all rounded-full select-none hover:bg-[#f5a]/10 active:bg-[#f5a]/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
