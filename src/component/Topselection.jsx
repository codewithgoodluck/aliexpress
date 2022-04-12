import React from "react";
import "../component/Topselection.css";
import count from "../asset/countd.PNG";

function Topselection() {
  return (
    <section className="container top mt-4 flex ">
      <section>
        <div className="center_item">
          <div className="center_item text-md">
            <span>Top Selection</span>
          </div>

          <span className="text-sm view ">View more</span>
        </div>

        <section className="grid grid-cols-3  gap-3	">
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/Ha1e9a95be7354cc5b78a9963e812ecfe3.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              {/* <div className="text-sm price_price ml-5">
                <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div>
              </div> */}
            </div>
            {/* <span className="order">27 order</span> */}
          </div>
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/Sf323000887834632a2a09d21180e7805K.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              {/* <div className="text-sm price_price ml-5">
                <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div>
              </div> */}
            </div>
            {/* <span className="order">27 order</span> */}
          </div>
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/Sc63778aa055349e09b0fa606d75e8d9e7.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              <div className="text-sm price_price ml-5">
                {/* <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div> */}
              </div>
            </div>
            {/* <span className="order">19 order</span> */}
          </div>
        </section>
      </section>

      <section className="ml-5">
        <div className="center_item">
          <div className="center_item text-md">
            <span>New Arrivals</span>
          </div>

          <span className="text-sm view ">View more</span>
        </div>

        <section className="grid grid-cols-3 gap-3  ">
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/HTB1Dto2nvDH8KJjy1Xcq6ApdXXaD.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              {/* <div className="text-sm price_price ml-5">
                <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div>
              </div> */}
            </div>
            {/* <span className="order">21 order</span> */}
          </div>
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/H0e58223c96e5477fae28f70694d95a999.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              {/* <div className="text-sm price_price ml-5">
                <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div>
              </div> */}
            </div>
            {/* <span className="order">28 order</span> */}
          </div>
          <div className="">
            <img
              src="https://ae01.alicdn.com/kf/Sc63778aa055349e09b0fa606d75e8d9e7.jpg_200x200Q90.jpg_.webp"
              alt=""
            />
            <div className="flex ">
              <span className="text-sm">NGN 2,685.78</span>

              {/* <div className="text-sm price_price ml-5">
                <div className="image_price">
                  <img
                    src="https://ae01.alicdn.com/kf/Ha18886fca5bb4644a6db5977380132142.png_.webp"
                    alt=""
                    className=""
                  />
                  <span className="pl-1 price text-sm">-27%</span>
                </div>
              </div> */}
            </div>
            {/* <span className="order">19 order</span> */}
          </div>
        </section>
      </section>
    </section>
  );
}

export default Topselection;
