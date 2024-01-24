"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { SocialLogin } from "../components/sociaLogin/SocialLogin";

export default function SignUp() {
  return (
    <div className="flex justify-center my-10">
      <Card placeholder={""} color="transparent" shadow={false}>
        <Typography placeholder={""} variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography placeholder={""} color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Your Name
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-purple-400 outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Your Email
            </Typography>
            <Input
              crossOrigin={""}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-purple-400 outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              placeholder={""}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Password
            </Typography>
            <Input
              crossOrigin={""}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-purple-400 outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            crossOrigin={""}
            label={
              <Typography
                placeholder={""}
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button placeholder={""} className="mt-6 bg-[#F5A]" fullWidth>
            sign up
          </Button>
          <Typography
            placeholder={""}
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
          <SocialLogin />
        </form>
      </Card>
    </div>
  );
}
