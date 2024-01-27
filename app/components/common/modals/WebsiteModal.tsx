import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";

export default function WebsiteModal() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    // Open the modal after 5 seconds
    const timeoutId = setTimeout(() => {
      handleOpen();
    }, 2000);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Dialog
      className="w-full md:w-[320px]"
      placeholder={""}
      open={open}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogBody placeholder={""}>
        <Image
          width={600}
          height={600}
          alt="New arrival"
          className="relative"
          src={
            "https://adminapi.applegadgetsbd.com/storage/media/large/Alpine-Loop-Blue-3303.png"
          }
        ></Image>
        <div className="absolute top-0 right-0">
          <span className="bg-[#f5a] px-2 py-1 text-gray-50 text-[10px] md:text-[12px]">
            20% OFF
          </span>
        </div>
      </DialogBody>
      <DialogFooter placeholder={""}>
        <Button
          placeholder={""}
          onClick={() => setOpen(false)}
          className="mr-1 border outline-none border-[#F5A] text-[#F5A] bg-white"
        >
          <span>Cancel</span>
        </Button>

        <Button
          className="bg-[#F5A]"
          placeholder={""}
          onClick={() => setOpen(false)}
        >
          <span>Visit</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
