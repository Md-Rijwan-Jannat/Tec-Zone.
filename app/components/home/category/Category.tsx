import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

export const Category: React.FC = () => {
  const brands = [
    "Apple",
    "Samsung",
    "HP",
    "Dell",
    "Sony",
    "Lenovo",
    "Asus",
    "Acer",
    "Microsoft",
    "LG",
    "Huawei",
    "Google",
    "Toshiba",
    "Xiaomi",
    "Motorola",
    "OnePlus",
    "Nokia",
    "Fitbit",
    "Garmin",
    "Bose",
    "Logitech",
    "Canon",
    "NVIDIA",
    // Add more brands as needed
  ];

  return (
    <Link
      href={"/productFilterPage"}
      className="flex items-center flex-wrap gap-3 mb-5 md:mb-10"
    >
      {brands.map((brand, index) => (
        <Button
          placeholder={""}
          key={index}
          size="sm"
          className="text-[10px] md:text-[12px] lg:text-[14px] bg-white font-normal border border-[#f5a] text-[#f5a] rounded-full px-3 md:px-4 py-1 capitalize"
        >
          {brand.toLowerCase()}{" "}
        </Button>
      ))}
    </Link>
  );
};
