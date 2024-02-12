"use client";
import { Badge, Button, IconButton, Input } from "@material-tailwind/react";
// import { Button } from '@material-tailwind/react';
import Link from "next/link";
import React from "react";
import { FaRegUser, FaShopify } from "react-icons/fa";
import { MdSearch, MdOutlineLocalOffer } from "react-icons/md";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { SearchModal } from "../modals/SearchModal";
import { UserModal } from "../modals/UserModal";

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between py-2 text-white shadow-lg hover:text-white lg:py-3">
      <div className="flex w-full flex-wrap items-center justify-between">
        <Link className="ml-2 text-xl text-[#F5A]" href="/">
          <span className="logo text-[#F5A] font-bold text-sm md:text-lg lg:text-2xl">
            Tec Zone
          </span>
        </Link>
        <div className="flex flex-col gap-x-2 sm:flex-row sm:items-center">
          <div className="relative w-full gap-2 md:w-max hidden lg:block">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "min-w-[400px]",
              }}
              className=" pl-9 placeholder:text-[#F5A] text-white border-none focus:outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin="anonymous"
            />
            <div className="!absolute left-3 top-[13px]">
              <MdSearch className="text-[#F5A] text-[13px] md:text-[17px] hidden md:block"></MdSearch>
            </div>
            <div className="border-b border-gray-600"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:gap-7 mr-2">
          <div className="lg:hidden flex flex-col items-center gap-1 hover:text-[#F5A]">
            <IconButton placeholder={""}>
              <div className=" mt-3">
                <SearchModal text="" />
              </div>
            </IconButton>
            <p className="text-[5px] md:text-[8px] lg:text-[10px] hidden md:block">
              Search
            </p>
          </div>
          <Link
            href={"/shops"}
            className="flex flex-col items-center gap-1 hover:text-[#F5A]"
          >
            <IconButton placeholder={""}>
              <FaShopify className="text-28px md:text-[30px] text-[#F5A]"></FaShopify>
            </IconButton>
            <p className="text-[5px] md:text-[8px] lg:text-[10px] hidden md:block">
              Our Shops
            </p>
          </Link>
          <div className="flex flex-col items-center gap-1 hover:text-[#F5A]">
            <IconButton placeholder={""}>
              <MdOutlineLocalOffer className="text-[18px] md:text-[30px] text-[#F5A]"></MdOutlineLocalOffer>
            </IconButton>
            <p className="text-[5px] md:text-[8px] lg:text-[10px] hidden md:block">
              Offers
            </p>
          </div>
          <UserModal />
          <div className="xl:hidden gap-2 flex mr-2">
            <Badge content="5">
              <IconButton placeholder={""}>
                <ShoppingBagIcon className="h-4 w-4 text-[#F5A]" />
              </IconButton>
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
