"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBriefcase, FaUniregistry } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const UserProfileData: React.FC = () => {
  return (
    <main className="profile-page">
      <section className="relative block h-400-px">
        <div className="relative">
          <Image
            className="h-[500px]"
            alt="cover"
            width={1500}
            height={1500}
            src="https://i.ibb.co/28q06R9/photo-1531297484001-80022131f5a1.jpg"
          />

          <span
            id="blackOverlay"
            className="w-full h-full top-0 absolute opacity-50 bg-black"
          ></span>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="flex justify-center -mt-16">
              <Image
                width={1500}
                height={1500}
                alt="..."
                src="https://i.ibb.co/fVg8DVg/sketch1699926435270.png"
                className="w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-full object-cover ring-2 md:ring-4 ring-white"
              />
            </div>
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center flex justify-center lg:justify-end">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Button
                      placeholder={""}
                      className="bg-[#f5a] active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    >
                      Send Mail
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Offers</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Sale</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Products
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Jenna Stones
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase flex items-center gap-2 justify-center">
                  <FaLocationDot className="w-4 h-4 text-gray-700" />
                  Los Angeles, California
                </div>
                <div className="mb-2 text-blueGray-600 mt-10 flex items-center gap-2 justify-center">
                  <FaBriefcase className="w-4 h-4 text-gray-700" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600 flex items-center gap-2 justify-center">
                  <FaUniregistry className="w-4 h-4 text-gray-700" />
                  University of Computer Science
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <Link href="#pablo" className="font-normal text-[#f5a]">
                      Show more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
