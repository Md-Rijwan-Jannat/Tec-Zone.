import { FC } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { PrinterIcon } from "@heroicons/react/24/outline";
import { PiPrinter } from "react-icons/pi";
import Icon from "../ui/icon/Icon";
import { Button } from "@material-tailwind/react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="flex items-center gap-2 justify-start">
          <input
            type="email"
            name="email"
            className="outline-none bg-gray-400 rounded-md py-2 px-2 placeholder:text-gray-600"
            placeholder="Enter your email"
            id=""
          />
          <Button className="text-white bg-[#F5A]" placeholder={""}>
            Subscribe
          </Button>
        </div>
        <div className="flex justify-center gap-3">
          <Icon icon={<FaFacebook size={20} />}></Icon>
          <Icon icon={<FaWhatsapp size={20} />}></Icon>
          <Icon icon={<FaTwitter size={20} />}></Icon>
          <Icon icon={<FaLinkedin size={20} />}></Icon>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <Link className="ml-2 text-xl text-[#F5A]" href="/">
              <span className="logo text-[#F5A] font-bold text-lg lg:text-2xl">
                Tec Zone
              </span>
            </Link>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Resources
            </h6>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Services
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                News
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Supports
              </Link>
            </p>
            <p>
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                {" "}
                About us
              </Link>
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Find Us
            </h6>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Pricing
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Settings
              </Link>
            </p>
            <p className="mb-4">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Orders
              </Link>
            </p>
            <p>
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200"
              >
                Help
              </Link>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaHome className="mr-2" />
              Bangladesh, Bogura 10012
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaMailBulk className="mr-2" />
              tec.zone@outlook.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FaPhone className="mr-2" />+ 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <PiPrinter className="mr-2" /> {""}+ 01 234 567 89
            </p>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© {currentYear} Copyright:</span>
        <Link
          href="https://tec-zone.com/"
          className="font-semibold text-neutral-600 dark:text-neutral-400"
        >
          by Tec zone
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
