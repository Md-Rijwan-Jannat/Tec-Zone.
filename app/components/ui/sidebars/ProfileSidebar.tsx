"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";

export function ProfileSlider() {
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      placeholder={""}
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <Link className="ml-2 text-xl text-[#F5A]" href="/">
          <span className="logo text-[#F5A] font-bold text-sm md:text-lg lg:text-2xl">
            Tec Zone
          </span>
        </Link>
      </div>
      <div className="p-2">
        <Input
          crossOrigin={""}
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
          placeholder="Search"
        />
      </div>
      <List placeholder={""}>
        <Accordion
          placeholder={""}
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem placeholder={""} className="p-0" selected={open === 1}>
            <AccordionHeader
              placeholder={""}
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={""}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={""}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List placeholder={""} className="p-0">
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/userProfile/userAnalytics"}> Analytics</Link>
              </ListItem>
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          placeholder={""}
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem placeholder={""} className="p-0" selected={open === 2}>
            <AccordionHeader
              placeholder={""}
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={""}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={""}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List placeholder={""} className="p-0">
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/userProfile/order"}> Orders</Link>
              </ListItem>
              <ListItem placeholder={""}>
                <ListItemPrefix placeholder={""}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                <Link href={"/userProfile/products"}> Products</Link>
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix placeholder={""}>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={"/userProfile/profile"}>Profile</Link>
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link href={"/userProfile/setting"}> Settings</Link>
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <FaSignInAlt className="h-5 w-5" />
          </ListItemPrefix>
          Sign In
        </ListItem>
        <ListItem placeholder={""}>
          <ListItemPrefix placeholder={""}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography placeholder={""} variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography
          placeholder={""}
          variant="small"
          className="font-normal opacity-80"
        >
          Upgrade to Tec Zone PRO and get even more features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            placeholder={""}
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            placeholder={""}
            as="a"
            href="#"
            variant="small"
            className="font-medium"
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
