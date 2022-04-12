import "../component/SideNavRight.css";
import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import "../component/Mini.css"
import "../component/Minicarosel.css";
import "../component/FlaashDeal.css";

function SideNavRight() {
  return (
    <>
      <section className="sign_up bg-white  mt-20 mr-5 ">
        <div className="ml-10 pb-3  ">
          <img
            src="https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"
            alt=""
            className="ml-16 pt-2"
          />
          <span className="text-sm ml-[1vw]">Welcome to AliExpress</span>

          <div className="flex button_text mt-5">
            <button className="text-sm px-4 py-2  text-white rounded-md join mx-2 ">
              Join
            </button>
            <button className="text-sm  px-4 py-2 rounded-md  up">
              Sign Up
            </button>
          </div>
        </div>

        <section
          style={{
            backgroundImage:
              "url(" +
              "https://ae01.alicdn.com/kf/H4d1fc82a600f4c51b3a3b4c7a5edb3a6G.jpg_Q90.jpg_.webp" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "300px",
            borderRadius: "10px",
          }}
          className="car mx-3   "
        >
          <div className="">
            <div className="">
              <span className=" text-sm ml-3 text-white"> Exclusive Offer</span>{" "}
              <br></br>
              <span className="text-sm ml-5  text-white">
                Get items for €0.01
              </span>
            </div>
          </div>

          <Carousel>
            <Carousel.Item>
              <div className="flex justify-around mb-10">
                <div className=" parent_sale_mini_side  mx-2">
                  <img
                    className="d-block car_image w-100"
                    src="https://ae04.alicdn.com/kf/H93d16926e8e54ce88df679e465332667K.jpg_120x120Q90.jpg_.webp"
                    alt="First slide"
                  />
                  <span className="text-sm  parent_sale_mini_color_side   ">
                    <img
                      src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                      alt=""
                    />
                    <span className="text-white  parent_sale_text_mini_side  text-xs">
                      NGN 4.16{" "}
                    </span>
                  </span>
                </div>
                <div className=" parent_sale_mini_side  mx-2">
                  <img
                    className="d-block car_image w-100"
                    src="https://ae04.alicdn.com/kf/H1039359139584ac082648cddf6ae426bQ.jpg_100x100Q90.jpg_.webp"
                    alt="First slide"
                  />
                  <span className="text-sm  parent_sale_mini_color_side   ">
                    <img
                      src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                      alt=""
                    />
                    <span className="text-white  parent_sale_text_mini_side  text-xs">
                      NGN 4.16{" "}
                    </span>
                  </span>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="flex justify-around mb-10">
                <div className=" parent_sale_mini_side  mx-2">
                  <img
                    className="d-block car_image w-100"
                    src="https://ae04.alicdn.com/kf/H52e3858735f64054ac37aef8087e5f7eU.jpg_100x100Q90.jpg_.webp"
                    alt="First slide"
                  />
                  <span className="text-sm  parent_sale_mini_color_side   ">
                    <img
                      src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                      alt=""
                    />
                    <span className="text-white  parent_sale_text_mini_side  text-xs">
                      NGN 4.16{" "}
                    </span>
                  </span>
                </div>
                <div className=" parent_sale_mini_side  mx-2">
                  <img
                    className="d-block car_image w-100"
                    src="https://ae04.alicdn.com/kf/S46c1fd139c36438d80a4e64fd15f9ffcd.jpg_100x100Q90.jpg_.webp"
                    alt="First slide"
                  />
                  <span className="text-sm  parent_sale_mini_color_side   ">
                    <img
                      src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                      alt=""
                    />
                    <span className="text-white  parent_sale_text_mini_side  text-xs">
                      NGN 4.16{" "}
                    </span>
                  </span>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </section>
      </section>
    </>
  );
}

export default SideNavRight;
