import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
// import "../component/Mini.css"
import "../component/Minicarosel.css";
import "../component/FlaashDeal.css";

function Minicarosel() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  return (
    <section className="">
      <Carousel>
        <Carousel.Item>
          <div className="flex justify-around mb-10">
            <div className=" parent_sale_mini bg-white mx-2">
              <img
                className="d-block car_image w-100"
                src="https://ae04.alicdn.com/kf/H93d16926e8e54ce88df679e465332667K.jpg_120x120Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white ">
              <img
                className="d-block car_image w-100"
                src="https://ae04.alicdn.com/kf/Se8618c65ec514cd2a0bb8cc1548543e1I.jpg_120x120Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white mx-2">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/Sc8f6dcd9b39d4a0fbab2dda7f459eecaq.jpg_200x200Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white mr-2">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/H184374f0ab094544882d69555b4f1d8bI.jpg_200x200Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-around mb-10">
            <div className=" parent_sale_mini bg-white mx-2">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/Sc63778aa055349e09b0fa606d75e8d9e7.jpg_200x200Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white ">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/H5f255824649b43a18f99805bab6970cdG.png"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white mx-2">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/H6bac9f49c3c84d5b9f439c25185427dfA.jpg_200x200Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
            <div className=" parent_sale_mini bg-white mr-2">
              <img
                className="d-block car_image w-100"
                src="https://ae01.alicdn.com/kf/H0409cfbca36e4ba3b7eea08c519d491e8.jpg_200x200Q90.jpg_.webp"
                alt="First slide"
              />
              <span className="text-sm  parent_sale_mini_color   ">
                <img
                  src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
                  alt=""
                />
                <span className="text-white  parent_sale_text_mini  text-xs">
                  NGN 4.16{" "}
                </span>
              </span>

              <div style={{ color: "#5A5A5A" }} className="text-sm mt-3 ml-1">
                <strike>NGN 1,692.04</strike>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Minicarosel;
