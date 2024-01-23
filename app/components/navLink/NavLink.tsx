"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import {
  navListMenuDesktop,
  navListMenuLaptop,
  navListMenuOthers,
  navListMenuPhone,
  navListMenuResource,
  navListMenuTablet,
  navListMenuCamera,
  navListMenuMonitor,
} from "../navData/NavData";

interface NavListItemProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

function NavListMenuItems({
  icon: Icon,
  title,
  description,
}: NavListItemProps) {
  return (
    <a href="#" key={title}>
      <MenuItem
        placeholder="menu"
        className="flex items-center gap-3 rounded-lg"
      >
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(Icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
            placeholder="Your Placeholder Text"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
            placeholder="Your Placeholder Text"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  );
}

function NavListMenu() {
  const [isMenuDesktop, setIsMenuDesktop] = useState(false);
  const [isMenuLaptop, setIsMenuLaptop] = useState(false);
  const [isMenuMonitor, setIsMenuMonitor] = useState(false);
  const [isMenuTablet, setIsMenuTablet] = useState(false);
  const [isMenuPhone, setIsMenuPhone] = useState(false);
  const [isMenuCamera, setIsMenuCamera] = useState(false);
  const [isMenuOthers, setIsMenuOthers] = useState(false);
  const [isMenuResource, setIsMenuResource] = useState(false);
  const [isMobileMenuDesktop, setIsMobileMenuDesktop] = useState(false);
  const [isMobileMenuLaptop, setIsMobileMenuLaptop] = useState(false);
  const [isMobileMenuMonitor, setIsMobileMenuMonitor] = useState(false);
  const [isMobileMenuTablet, setIsMobileMenuTablet] = useState(false);
  const [isMobileMenuPhone, setIsMobileMenuPhone] = useState(false);
  const [isMobileMenuCamera, setIsMobileMenuCamera] = useState(false);
  const [isMobileMenuOthers, setIsMobileMenuOthers] = useState(false);
  const [isMobileMenuResource, setIsMobileMenuResource] = useState(false);

  const renderItemsDesktop = navListMenuDesktop.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsLaptop = navListMenuLaptop.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsMonitor = navListMenuMonitor.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsTablet = navListMenuTablet.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsPhone = navListMenuPhone.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsCamera = navListMenuCamera.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsOthers = navListMenuOthers.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );
  const renderItemsResource = navListMenuResource.map(
    ({ icon, title, description }, key) => (
      <NavListMenuItems
        placeholder="Text"
        key={key}
        icon={icon}
        title={title}
        description={description}
      />
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuDesktop}
        handler={setIsMenuDesktop}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuDesktop || isMobileMenuDesktop}
              onClick={() => setIsMobileMenuDesktop((cur) => !cur)}
            >
              Desktop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuDesktop ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuDesktop ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsDesktop}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuLaptop}
        handler={setIsMenuLaptop}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuLaptop || isMobileMenuLaptop}
              onClick={() => setIsMobileMenuLaptop((cur) => !cur)}
            >
              Laptop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuLaptop ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuLaptop ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsLaptop}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuMonitor}
        handler={setIsMenuMonitor}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuMonitor || isMobileMenuMonitor}
              onClick={() => setIsMobileMenuMonitor((cur) => !cur)}
            >
              Monitor
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuMonitor ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuMonitor ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsMonitor}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuTablet}
        handler={setIsMenuTablet}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuTablet || isMobileMenuTablet}
              onClick={() => setIsMobileMenuTablet((cur) => !cur)}
            >
              Tablet
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuTablet ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuTablet ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsTablet}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuPhone}
        handler={setIsMenuPhone}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuPhone || isMobileMenuPhone}
              onClick={() => setIsMobileMenuPhone((cur) => !cur)}
            >
              Phone
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuPhone ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuPhone ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsPhone}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuCamera}
        handler={setIsMenuCamera}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuCamera || isMobileMenuCamera}
              onClick={() => setIsMobileMenuCamera((cur) => !cur)}
            >
              Camera
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuCamera ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuCamera ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsCamera}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuOthers}
        handler={setIsMenuOthers}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOthers || isMobileMenuOthers}
              onClick={() => setIsMobileMenuOthers((cur) => !cur)}
            >
              Others
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOthers ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOthers ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsOthers}
          </ul>
        </MenuList>
      </Menu>
      <Menu
        open={isMenuResource}
        handler={setIsMenuResource}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography
            placeholder="Your Placeholder Text"
            as="div"
            variant="small"
            className="font-medium"
          >
            <ListItem
              placeholder="Your Placeholder Text"
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuResource || isMobileMenuResource}
              onClick={() => setIsMobileMenuResource((cur) => !cur)}
            >
              Resources
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuResource ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuResource ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          placeholder="Your Placeholder Text"
          className="hidden max-w-screen-xl rounded-xl lg:block"
        >
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItemsResource}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuDesktop}>{renderItemsDesktop}</Collapse>
        <Collapse open={isMobileMenuLaptop}>{renderItemsLaptop}</Collapse>
        <Collapse open={isMobileMenuMonitor}>{renderItemsMonitor}</Collapse>
        <Collapse open={isMobileMenuTablet}>{renderItemsTablet}</Collapse>
        <Collapse open={isMobileMenuPhone}>{renderItemsPhone}</Collapse>
        <Collapse open={isMobileMenuCamera}>{renderItemsCamera}</Collapse>
        <Collapse open={isMobileMenuOthers}>{renderItemsOthers}</Collapse>
        <Collapse open={isMobileMenuResource}>{renderItemsResource}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List
      placeholder="Your Placeholder Text"
      className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
    >
      <NavListMenu />
      <Typography
        placeholder="Your Placeholder Text"
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem
          placeholder="Your Placeholder Text"
          className="flex items-center gap-2 py-2 pr-4"
        >
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    };
  }, []);

  return (
    <Navbar
      placeholder="Your Placeholder Text"
      className="mx-auto max-w-screen-xl px-4 py-2"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder="Your Placeholder Text"
          as="a"
          href="#"
          variant="h6"
          className="mr-4 block lg:hidden xl:block cursor-pointer lg:ml-2 text-[#cd4747]"
        >
          25% Discount
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 xl:flex">
          <Badge content="5">
            <IconButton placeholder={""}>
              <ShoppingBagIcon className="h-4 w-4 text-[#F5A]" />
            </IconButton>
          </Badge>
        </div>
        <IconButton
          placeholder="Your Placeholder Text"
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-[#F5A]" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-[#F5A]" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button
            placeholder="Your Placeholder Text"
            variant="outlined"
            size="sm"
            color="blue-gray"
            fullWidth
          >
            Log In
          </Button>
          <Button
            placeholder="Your Placeholder Text"
            variant="gradient"
            size="sm"
            fullWidth
          >
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
