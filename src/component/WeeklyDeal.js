import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import imtemData from "./Data/Itemdata";
import "../component/Weeklydeal.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import datas from "../component/Data/Weeklydeal";

function WeeklyDeal({ image, name }) {
  return (
    <section className="week max-w-6xl max-auto mx-3 ">
      <section className="relative">
        <section className="  h-10 pb-10 container">
          <div className="flash flex justify-between mt-5  my-4  ">
            <div className="flex mt-2">
              <span>
                {" "}
                <img
                  src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                  alt=""
                />
              </span>
              <span className="text-sm mt-1 ml-1">Weekly Deals</span>
            </div>
          </div>
        </section>
        <span className=" absolute top-10 ml-3 limited text-xs ">
          Lowest Price in 30 Days
        </span>

        <div className="grid flash_body mt-5 grid-cols-3  gap-3	 container">
          {datas.map((data) => {
            return<div className="g_parent">
              <div className="flash_child">
                <img
                  src={data.image}
                  alt=""
                />

                <span className="text-sm rounded percentage flex">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                  />
                  <span className="pl-1 text-white text-sm">-27%</span>
                </span>
                <span className="text-sm ">
                  &#x20A6; <span className="pl-1">{data.price}</span>
                </span>
              </div>

            </div>
          
          })}
        </div>
      </section>
    </section>
  );
}

export default WeeklyDeal;
