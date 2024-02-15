"use client";
import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";
import { IoMenu } from "react-icons/io5";
import { ProfileSlider } from "../../ui/sidebars/ProfileSidebar";

export const ProfileDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <React.Fragment>
      <div className="relative">
        <Button
          onClick={openDrawer}
          className={`text-white rounded-full `}
          placeholder={""}
        >
          <IoMenu className="text-white w-6 h-6" />
        </Button>
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-[150]"
            onClick={closeDrawer}
          />
        )}
        <Drawer
          placeholder={""}
          open={open}
          onClose={closeDrawer}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <IconButton
              placeholder={""}
              variant="text"
              color="blue-gray"
              onClick={closeDrawer}
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
          <div className="-mt-8">
            <ProfileSlider />
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
};
