import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

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
      placeholder={""}
      open={open}
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className="text-[#F5A]" placeholder={""}>
        Tec Zone new arrival.
      </DialogHeader>

      <DialogBody placeholder={""}>
        The key to more success is to have a lot of pillows. Put it this way, it
        took me twenty-five years to get these plants, twenty-five years of
        blood, sweat, and tears, and I&apos;m never giving up, I&apos;m just
        getting started. I&apos;m up to something. Fan luv.
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
