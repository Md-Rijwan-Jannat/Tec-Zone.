import React from "react";
import "./Testimonial.css";
import Title from "../../ui/title/Title";
import Link from "next/link";

export default function Testimonial() {
  return (
    <div className={"testimonialRoot"}>
      <Title title={"Testimonial -"} />
      <div
        className="void w-full m-auto relative overflow-x-hidden overflow-y-hidden"
        id="void"
      >
        <div className="crop">
          <ul
            id="card-list"
            className="ul"
            style={{ "--count": 6 } as React.CSSProperties}
          >
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <Link className="a" href="">
                  <span className="model-name text-[9px] md:text-[14px] lg:text-sm">
                    Gretel-ACTGAN
                  </span>
                  <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                    sm px [14] Model for generating highly dimensional, mostly
                    numeric, tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <div className="style">
                  <Link className="a" href="">
                    <span className="model-name text-[7px] md:text-lg">
                      Gretel-ACTGAN
                    </span>
                    <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                      sm px [14] Model for generating highly dimensional, mostly
                      numeric, tabular data
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <Link className="a" href="">
                  <span className="model-name text-[7px] md:text-lg">
                    Gretel-ACTGAN
                  </span>
                  <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                    sm [14] Model for generating highly dimensional, mostly
                    numeric, tabular data
                  </span>
                </Link>
              </div>
            </li>
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <div className="style">
                  <Link className="a" href="">
                    <span className="model-name text-[7px] md:text-lg">
                      Gretel-ACTGAN
                    </span>
                    <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                      sm px [14] Model for generating highly dimensional, mostly
                      numeric, tabular data
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <div className="style">
                  <Link className="a" href="">
                    <span className="model-name text-[7px] md:text-lg">
                      Gretel-ACTGAN
                    </span>
                    <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                      sm px [14] Model for generating highly dimensional, mostly
                      numeric, tabular data
                    </span>
                  </Link>
                </div>
              </div>
            </li>
            <li className="li">
              <div className="card W-56 p-2 md:p-3">
                <Link className="a" href="">
                  <span className="model-name text-[7px] md:text-lg">
                    Gretel-ACTGAN
                  </span>
                  <span className="text-[6px] md:text-[7px] lg:text-[13px] space-y-0">
                    sm [14] Model for generating highly dimensional, mostly
                    numeric, tabular data
                  </span>
                </Link>
              </div>
            </li>
          </ul>
          <div className="last-circle w-6/12 lg:w-7/12 left-[40%] md:left-[50%]"></div>
          <div className="second-circle w-4/12 lg:w-5/12 left-[40%] md:left-[50%]"></div>
        </div>
        <div className="mask w-[40%] md:w-[50%]"></div>
        <div className="center-circle w-[80px] md:w-[150px] xl:w-[230px] left-[40%] md:left-[50%]"></div>
      </div>
    </div>
  );
}
