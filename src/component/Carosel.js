import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../component/Carosel.css";
import datas from "../component/Data/data";
import Minicarosel from "../component/Minicarosel";
import SideNav from "./SideNav";
import SideNavRight from "./SideNavRight";

function Carosel() {
  return (
    <>
      <section className="flex parent_car  justify-between">
        <section className="w-80">
        <SideNav></SideNav>
        </section>

        <section className="car_p mx-[3vw]">
          <div className="flex text_inner justify-between">
            <span>LiveSuper </span>
            <span>DealsStores </span>
            <span>You'll </span>
            <span>Love</span>
            <span> New User Zone</span>
          </div>

          <section>
            <Carousel className="carosel">
              {datas.map((data) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block rounded "
                      src={data.image}
                      alt="First slide"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </section>

          <section
            style={{
              backgroundImage:
                "url(" +
                "https://ae01.alicdn.com/kf/H863bb19ae5de49a8bd6074a3d81599d9z.jpg_Q90.jpg_.webp" +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "210px",
              borderRadius: "10px",
            }}
            className="car mx-3 mt-4  flex "
          >
            <div className="flex ">
              <div className="w-80">
                <div className="mt-10">
                  <span className=" pt-20 ml-5 welcome text-white">
                    {" "}
                    Welcome newcomers!
                  </span>{" "}
                  <br></br>
                  <span className="text-sm ml-3  text-white">
                    Get items for €0.01 or get a €4 coupon!
                  </span>
                </div>

                <div className="claim_parent">
                  <img src="https://ae01.alicdn.com/kf/Hc9b782577fb54b369d5aface2f69b38cD.gif"></img>
                  <div className="claim_text">
                    <span className="text-sm">NGN 831.4</span>
                    <p className="text-xs">Claim</p>
                  </div>
                </div>
              </div>

              <div className="  mini_car_parent ">
                <Minicarosel></Minicarosel>
              </div>

              {/* <div className="bg-white ">
              
             <Minicarosel></Minicarosel>
            </div> */}
            </div>

            <div></div>
          </section>
        </section>

        <section className="w-80"> <SideNavRight></SideNavRight></section>
       
       
      </section>
    </>
  );
}

export default Carosel;
