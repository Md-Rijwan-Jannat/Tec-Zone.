import React, { useState } from "react";
import {
  Drawer,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open: number;
}

const bg = "bg-[#f5a] bg-opacity-10 px-2 py-3";
const text = "text-black text-[12px] md:text-[14px] font-normal";

export default function FilterModal() {
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number): void =>
    setOpen((prevState: number) => (prevState === value ? 0 : value));

  const Icon: React.FC<IconProps> = ({ id, open }) => {
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
  };

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

  return (
    <div>
      <span onClick={openDrawerRight} className="lg:hidden block">
        {"Filter -"}
      </span>{" "}
      <Drawer
        placeholder={""}
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className={`p-2`}
      >
        <div className={`${bg} mb-6 flex items-center justify-between`}>
          <Typography placeholder={""} variant="h5" color="blue-gray">
            Filter products
          </Typography>
          <IconButton
            placeholder={""}
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography placeholder={""} className={`${bg} space-y-3`}>
          {filter}
        </Typography>
      </Drawer>
    </div>
  );
}
