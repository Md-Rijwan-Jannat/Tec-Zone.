import React, { useState } from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { MdSearch } from "react-icons/md";

type DialogSize = "xxl";

interface SearchModalProps {
  text: string;
}

export function SearchModal({ text }: SearchModalProps) {
  const [size, setSize] = useState<DialogSize | null>(null);

  const handleOpen = (value: DialogSize | null) => setSize(value);

  return (
    <>
      <div className="mb-3 flex gap-3">
        <MdSearch
          onClick={() => handleOpen("xxl")}
          className="text-[18px] md:text-[35px] text-[#F5A]"
        ></MdSearch>
      </div>
      <Dialog
        placeholder={"dialog"}
        className="w-full top-0 absolute
        "
        open={size === "xxl"}
        handler={handleOpen}
      >
        <DialogBody placeholder={"body"}>
          <div className="relative w-full gap-2 md:w-max">
            <Input
              type="search"
              placeholder="Search"
              containerProps={{
                className: "w-full",
              }}
              className="bg-gray-200 pl-9 placeholder:text-[#F5A] text-white border-none focus:outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin="anonymous"
            />
            <div className="!absolute left-3 top-[13px]">
              <MdSearch className="text-[#F5A] text-[13px] md:text-[17px]"></MdSearch>
            </div>
          </div>
          <div className="text-gray-500 text-center h-10 mt-5">
            Content Not Found!
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
