import React from "react";
import Navbarmain from "../component/Navbarmain";
import "../Pages/Product.css";
import star from "../asset/starp.PNG";
import Footer from "./Footer";
import More2loveDesktop from "../component/More2loveDesktop";
import FotterDesktop from "../component/FotterDesktop";
import ProductNavbar from "../component/ProductNavbar";

function Product() {
  return (
    <>
      {" "}
      {/* <Navbarmain></Navbarmain> */}
      <ProductNavbar></ProductNavbar>
      <section className="container">
        <div className=" store-info ">
          <ul className=" ">
            <li style={{ color: "#666666" }} className="text-sm">
              Store Home
            </li>
            <li style={{ color: "#666666" }} className="text-sm">
              Product
            </li>
            <li style={{ color: "#666666" }} className="text-sm">
              Sale Items
            </li>
            <li style={{ color: "#666666" }} className="text-sm">
              Top Selling
            </li>
            <li style={{ color: "#666666" }} className="text-sm">
              Feedback
            </li>
          </ul>
        </div>
      </section>
      <section>
        {/* <section className=" lg:flex container">
       <section className="hidden lg:block bg-white w-full pl-5">
          <div>
            <span className="text-sm">Related Categories</span>
            <p className="text-xs font-light ml-3"> {"<"} Any category </p>
            <p className="text-xs font-light ml-6"> {"<"} Women Category </p>
            <p className="text-xs font-light ml-8">Dresses</p>
          </div>
          <hr className="my-3  mr-6" />

          <div>
            <span className="text-sm">Brand</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1UolDLVXXXXcYXXXX760XFXXXo.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1eRAsamRRMKJjy0Flq6xFepXah.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB10JBoLVXXXXaqXVXX760XFXXXt.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1W5a0b7fb_uJkSmRyq6zWxVXaq.jpg_q90.jpg_.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/Hdc8bb73b7dca4fdb85c179acea030d037.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/H3b50456c5ad747a6911a7969362925eeb.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1GruHNpXXXXaKapXXq6xXFXXXv.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB11FtAXoF7MKJjSZFLq6AMBVXaj.jpg_q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Size</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">One Size</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XS</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XXS</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">4XL</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XXL</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Color</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">One Size</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Silver</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Black</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Red</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Navy Blue</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Materoal</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 "> Acrylic</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Rayon</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Viscose</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Cotton</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Red</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Dresses Length</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1DCxcJFXXXXXOXpXX760XFXXX4.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1POsVJpXXXXbvXVXX760XFXXXh.png_.webp"
                  alt=""
                />
         
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1rVmZIpXXXXbeXXXX760XFXXXn.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB19qBkajDuK1RjSszdq6xGLpXar.jpg_q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Sleeve Style</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1WXWLIpXXXXaYXFXX760XFXXXD.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB107eFIpXXXXXvXVXX760XFXXXr.png_.webp"
                  alt=""
                />
        
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1s.ixIpXXXXavaXXX760XFXXXL.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1YjORIpXXXXa_XpXX760XFXXXe.png_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Neckline</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1D9aUIpXXXXXGXpXX760XFXXX7.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1QsOSIpXXXXa6XpXX760XFXXXA.png_.webp"
                  alt=""
                />
      
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1GPSTIpXXXXXVXpXX760XFXXXk.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB16J9FIpXXXXXZXVXX760XFXXX0.png_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Silhouette</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">
                {" "}
                Trumpet / Mermaid
              </span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Pleated</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Ball Gown</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Cotton</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">BUD</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Style</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 "> Bohemian</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Sexy & Club</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Preppy Style</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">vintage</span>
            </div>

            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm"> Decoration</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 "> Sashes</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Pockets</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Bow</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Lace</span>
            </div>

            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Sleeve Length(cm)</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1NayKIpXXXXbkXFXX760XFXXXO.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1Ari0IpXXXXbmXXXX760XFXXXq.png_.webp"
                  alt=""
                />
          "
                /> 
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1OBWDIpXXXXaZXVXX760XFXXXK.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1s_9MIpXXXXXkXFXX760XFXXXc.png_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Pattern Type</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 "> Sashes</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">DOT</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">striped</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Animal</span>
            </div>

            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm"> Fabric Type</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 "> Corduroy</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Flannel</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Denim</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">SATIN</span>
            </div>

            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Brand</span>
            <div className="flex">
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/H09411516b93d48c4aa697f3545c497eeE.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/H7f7e7a66a4414dc2b000ca0e3384eac4s.png_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1GruHNpXXXXaKapXXq6xXFXXXv.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB11FtAXoF7MKJjSZFLq6AMBVXaj.jpg_q90.jpg_.webp"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/H09411516b93d48c4aa697f3545c497eeE.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB19qBkajDuK1RjSszdq6xGLpXar.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB1GruHNpXXXXaKapXXq6xXFXXXv.jpg_q90.jpg_.webp"
                  alt=""
                />
                <img
                  className="w-20 my-2"
                  src="https://ae01.alicdn.com/kf/HTB11FtAXoF7MKJjSZFLq6AMBVXaj.jpg_q90.jpg_.webp"
                  alt=""
                />
              </div>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Size</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">One Size</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XS</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XXS</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">4XL</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">XXL</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <hr className="my-3  mr-6" />
          <div>
            <span className="text-sm">Color</span>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">One Size</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Silver</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Black</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Red</span>
            </div>
            <div className="size">
              <input type="checkbox" />
              <span className="text-xs font-light ml-2 ">Navy Blue</span>
            </div>
            <span style={{ color: "#2E9CC3" }} className="text-center text-xs">
              View More{" "}
            </span>
          </div>
          <div>
            <span className="text-sm"> AliExpress Mobile App</span>
            <p className="text-xs font-size">Search Anywhere, Anytime!</p>

            <img
              src="https://ae01.alicdn.com/kf/HTB1phZLKVXXXXX5XFXX760XFXXXC.png"
              alt=""
            />
            <span className="text-sm">Scan or click to download</span>
          </div>
          <hr className="my-3  mr-6" />
        </section>

        <section className="  lg:ml-20 ">
        <section className="product container">
          <div className="ml-1">
            <span className="Productcat">
              All Categories {">"} Women's Clothing {">"} (17384 Results)
            </span>
          </div>

          <div>
            <span className="text-sm ml-1 price_text">
              Items related to watch
            </span>
          </div>
          <div className="parent_price">
            <span className="text-xs mx-1">Price:</span>
            <input
              placeholder="min"
              className="w-[15vw] text-xs pl-3 h-[5vh]"
              type="text"
            />{" "}
            -
            <input
              placeholder="349.98"
              className="w-[15vw] text-xs pl-1 h-[5vh]"
              type="text"
            />
            <input
              placeholder="Ship From"
              className="w-[20vw] ml-2 text-xs pl-1 h-[5vh]"
              type="text"
            />
            <span className="mx-1 shipping">
              <input className="" type="checkbox" />
              <span className="text-xs pl-1">Free Shipping</span>
            </span>
            <span className=" mx-1 shipping2">
              <input className="" type="checkbox" />
              <span className="text-xs flex pl-1">

              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <img className="w-4" src={star} alt="" />
              <span>
                & Up
              </span>
              </span>
            </span>
          </div>
          <div className="parent_price my-3">
            <span className="text-xs mx-1">Sort By:</span>
            <input
              placeholder="Best Match"
              className="w-[15vw] text-xs pl-3 h-[5vh]"
              type="text"
            />{" "}
               <input
              placeholder="Orders"
              className="w-[15vw] mx-2 text-xs pl-3 h-[5vh]"
              type="text"
            />{" "}
               <input
              placeholder="Newest"
              className="w-[15vw]  text-xs pl-3 h-[5vh]"
              type="text"
            />{" "}
               <input
              placeholder="Price"
              className="w-[15vw] ml-2 text-xs pl-3 h-[5vh]"
              type="text"
            />{" "}
            </div>
        </section>

        <section className="container">
        <div className="grid my-4 mx-3 grid-col-1 gap-3 md:grid-cols-4 gap-3">
        <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5c84db466cb94fefa4e6ebad0c19348aX/SZCURC-2022-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-Waterproof-Bluetooth-For-Android.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE 2021 New Smart Watch Men </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H5deda4a076fc4946808a591f3b2f6554o/LIGE-2021-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">SZCURC 2022 New Smart Watch M </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8e56ab11baa14e89b8bd5ac1e15ac082i/LIGE-New-454-454-Screen-Smart-Watch-Men-Always-Display-The-Time-Bluetooth-Call-Local-Music.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New Smart Watch Men Full T </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H165481cc4bf04badb9a31a1eeb3a3f34E/LIGE-2022-New-Smart-Watch-Women-Full-Touch-Screen-Sport-Fitness-Watches-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE New 454*454 Screen Smart W</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S4c0fd723d0e147ad99d4ae9a08a21a33O/Smart-Watch-Men-Fitness-Trackers-Activity-Trackers-Smartwatch-Waterproof-Sport-Watch-with-Sleep-Heart-Rate-Monitor.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">M5 Smart Watches Band Sport Fit</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S9ab3e35678634b978dc760e79b33925dy/M6-Smart-Watch-for-Men-Women-Activity-Tracker-Fitness-Bracelet-Heart-Rate-Monitor-Waterproof-Sport-Smartwatch.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S05d5c906159c439f88785cda8e0bb467e/TicWatch-Pro-512Mb-Smart-Watch-Men-s-Watch-Wear-OS-for-iOS-Android-NFC-Payment-Built.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">Blackview R7 Pro Smartwatch IP68 Wa</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hd725323dcdd8438a945de4eb5ffe6060D/K28H-Smart-Watch-Men-BT-Phone-Call-Customize-Faces-Music-Sports-Fitness-Tracker-Super-Long-Standby.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8109f081706a40d499ad9b632939fe9be/2022-New-NFC-Smart-Watch-Men-Custom-Dial-Call-Sport-GPS-Track-Watches-Women-Heart-Rate.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5a37629fa2be4d7b8f1679445193350ag/SK17-390-390-HD-Sreen-Smartwatch-Men-BT-Call-Phone-Watch-NFC-Watch-Bussiness-Men-Smart.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H2ef62bd30836413a859e183b32d363fcp/P30-Smart-Watch-Airbag-Air-Pump-True-Accurate-Blood-Oxygen-Pressure-Heart-Rate-Health-Body-Temperature.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">COLMI M40 Smartwatch Men 1.32 inc</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hab6b4ab9311e4020a691b8e0d81a014ar/D13-Smart-Watch-Men-Blood-Pressure-Waterproof-Smartwatch-Women-Heart-Rate-Monitor-Fitness-Tracker-Watch-Sport.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">AW13 Smart Watch Men Waterproof</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
            
        </div>
        </section>
        <section className="container">
        <div className="grid my-4 mx-3 grid-col-1 gap-3 md:grid-cols-4 gap-3">
        <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5c84db466cb94fefa4e6ebad0c19348aX/SZCURC-2022-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-Waterproof-Bluetooth-For-Android.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE 2021 New Smart Watch Men </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H5deda4a076fc4946808a591f3b2f6554o/LIGE-2021-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">SZCURC 2022 New Smart Watch M </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8e56ab11baa14e89b8bd5ac1e15ac082i/LIGE-New-454-454-Screen-Smart-Watch-Men-Always-Display-The-Time-Bluetooth-Call-Local-Music.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New Smart Watch Men Full T </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H165481cc4bf04badb9a31a1eeb3a3f34E/LIGE-2022-New-Smart-Watch-Women-Full-Touch-Screen-Sport-Fitness-Watches-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE New 454*454 Screen Smart W</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S4c0fd723d0e147ad99d4ae9a08a21a33O/Smart-Watch-Men-Fitness-Trackers-Activity-Trackers-Smartwatch-Waterproof-Sport-Watch-with-Sleep-Heart-Rate-Monitor.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">M5 Smart Watches Band Sport Fit</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S9ab3e35678634b978dc760e79b33925dy/M6-Smart-Watch-for-Men-Women-Activity-Tracker-Fitness-Bracelet-Heart-Rate-Monitor-Waterproof-Sport-Smartwatch.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S05d5c906159c439f88785cda8e0bb467e/TicWatch-Pro-512Mb-Smart-Watch-Men-s-Watch-Wear-OS-for-iOS-Android-NFC-Payment-Built.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">Blackview R7 Pro Smartwatch IP68 Wa</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hd725323dcdd8438a945de4eb5ffe6060D/K28H-Smart-Watch-Men-BT-Phone-Call-Customize-Faces-Music-Sports-Fitness-Tracker-Super-Long-Standby.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8109f081706a40d499ad9b632939fe9be/2022-New-NFC-Smart-Watch-Men-Custom-Dial-Call-Sport-GPS-Track-Watches-Women-Heart-Rate.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5a37629fa2be4d7b8f1679445193350ag/SK17-390-390-HD-Sreen-Smartwatch-Men-BT-Call-Phone-Watch-NFC-Watch-Bussiness-Men-Smart.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H2ef62bd30836413a859e183b32d363fcp/P30-Smart-Watch-Airbag-Air-Pump-True-Accurate-Blood-Oxygen-Pressure-Heart-Rate-Health-Body-Temperature.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">COLMI M40 Smartwatch Men 1.32 inc</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hab6b4ab9311e4020a691b8e0d81a014ar/D13-Smart-Watch-Men-Blood-Pressure-Waterproof-Smartwatch-Women-Heart-Rate-Monitor-Fitness-Tracker-Watch-Sport.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">AW13 Smart Watch Men Waterproof</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
            
        </div>
        </section>
        <section className="container">
        <div className="grid my-4 mx-3 grid-col-1 gap-3 md:grid-cols-4 gap-3">
        <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5c84db466cb94fefa4e6ebad0c19348aX/SZCURC-2022-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-Waterproof-Bluetooth-For-Android.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE 2021 New Smart Watch Men </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H5deda4a076fc4946808a591f3b2f6554o/LIGE-2021-New-Smart-Watch-Men-Full-Touch-Screen-Sport-Fitness-Watch-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">SZCURC 2022 New Smart Watch M </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8e56ab11baa14e89b8bd5ac1e15ac082i/LIGE-New-454-454-Screen-Smart-Watch-Men-Always-Display-The-Time-Bluetooth-Call-Local-Music.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New Smart Watch Men Full T </span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H165481cc4bf04badb9a31a1eeb3a3f34E/LIGE-2022-New-Smart-Watch-Women-Full-Touch-Screen-Sport-Fitness-Watches-IP67-Waterproof-Bluetooth-For.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">LIGE New 454*454 Screen Smart W</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S4c0fd723d0e147ad99d4ae9a08a21a33O/Smart-Watch-Men-Fitness-Trackers-Activity-Trackers-Smartwatch-Waterproof-Sport-Watch-with-Sleep-Heart-Rate-Monitor.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">M5 Smart Watches Band Sport Fit</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S9ab3e35678634b978dc760e79b33925dy/M6-Smart-Watch-for-Men-Women-Activity-Tracker-Fitness-Bracelet-Heart-Rate-Monitor-Waterproof-Sport-Smartwatch.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S05d5c906159c439f88785cda8e0bb467e/TicWatch-Pro-512Mb-Smart-Watch-Men-s-Watch-Wear-OS-for-iOS-Android-NFC-Payment-Built.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">Blackview R7 Pro Smartwatch IP68 Wa</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hd725323dcdd8438a945de4eb5ffe6060D/K28H-Smart-Watch-Men-BT-Phone-Call-Customize-Faces-Music-Sports-Fitness-Tracker-Super-Long-Standby.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H8109f081706a40d499ad9b632939fe9be/2022-New-NFC-Smart-Watch-Men-Custom-Dial-Call-Sport-GPS-Track-Watches-Women-Heart-Rate.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/S5a37629fa2be4d7b8f1679445193350ag/SK17-390-390-HD-Sreen-Smartwatch-Men-BT-Call-Phone-Watch-NFC-Watch-Bussiness-Men-Smart.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">2022 New NFC Smart Watch Men C</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/H2ef62bd30836413a859e183b32d363fcp/P30-Smart-Watch-Airbag-Air-Pump-True-Accurate-Blood-Oxygen-Pressure-Heart-Rate-Health-Body-Temperature.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">COLMI M40 Smartwatch Men 1.32 inc</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
          <div className="bg-white rounded">
            <img
              className="w-60 rounded"
              src="https://ae01.alicdn.com/kf/Hab6b4ab9311e4020a691b8e0d81a014ar/D13-Smart-Watch-Men-Blood-Pressure-Waterproof-Smartwatch-Women-Heart-Rate-Monitor-Fitness-Tracker-Watch-Sport.jpg_220x220xz.jpg_.webp"
              alt=""
            />
            <span className="text-xs ml-1">AW13 Smart Watch Men Waterproof</span>
            <img
              className="w-50 ml-1"
              src="https://ae01.alicdn.com/kf/H08a2b4d322c5466498dc53c63e90133cM.png"
              alt=""
            />

            <div>
              <span className="text-xs text-red-500 ml-1">Limited Offer</span>
              <p className="text-xs ml-1">NGN 9,231.30</p>
            </div>
            <div className="flex ml-1">
              <span className="text-xs greyColor ">40024 sold</span>

              <span className="flex ml-2">
                {" "}
                <img className="w-4" src={star} alt="" />
                <span  className="text-xs greyColor"> 4.7</span>
              </span>
            </div>
            <span className="text-xs ml-1">China Offer Store</span>
          </div>
            
        </div>
        </section>
   
        </section>

      
      
       </section>
      */}

        <section>
          <Footer></Footer>
        </section>
      </section>
      <section className="bg-white">
        <section className="container section ">
        <section className="left">
        <div className="left_img">
            <img
              className=""
              src="https://ae01.alicdn.com/kf/Sa02b2c38eb2e405d8c62709ba9327de2g/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_Q90.jpg_.webp"
              alt=""
            />

            <div className="">
              <div className="flex left_img_inner justify-between  my-3  ">
                <span className=" border-2">
                  <img
                    className="px-1 py-1"
                    src="https://ae01.alicdn.com/kf/Sd9eb9936167049b084644d8986f0a860Q/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                    alt=""
                  />
                </span>
                <span className=" border-2">
                  <img
                    className="px-1 py-1"
                    src="https://ae01.alicdn.com/kf/S0f175d2a2d4640c5ab83e89fd0ad0a317/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                    alt=""
                  />
                </span>
                <span className=" border-2"></span>
                <span className=" border-2">
                  <img
                    className="px-1 py-1"
                    src="https://ae01.alicdn.com/kf/Scd451779896e44d4a47017d13b0a84c4F/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                    alt=""
                  />
                </span>
                <span className=" border-2">
                  <img
                    className="px-1 py-1"
                    src="https://ae01.alicdn.com/kf/Sa7b70984af494597b1ace25324a790faC/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                    alt=""
                  />
                </span>
                <span className=" border-2">
                  <img
                    className="px-1 py-1"
                    src="https://ae01.alicdn.com/kf/S29b609a5dcad401eb1973521354050764/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                    alt=""
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="mx-4 parent-second">
            <div className="second-two">
              <p className="text-xs font-light">
                Smart Watches Blood Pressure Waterproof Men Women Heart Rate
                Monitor Fitness Tracker Digital Wrist Watch Sport For Android
                IOS
              </p>

              <div className="second-two-inner ">
                <img src={star} alt="" />
                <span>4.9</span>
                <span className="px-2">11 Reviews </span>
                <span>974 orders</span>
              </div>
            </div>

            <div className="relative second-three">
              <img
                src="https://ae01.alicdn.com/kf/Hcf8a5927756e4373bf1d1b928f2d856fN.png"
                alt=""
              />
              <div className="flex w-full justify-between px-2 absolute top-0">
                <div className="w-30">
                  <span className="span-one ">NGN 2,002.16</span>
                  <p className="mt-2">
                    {" "}
                    <strike>NGN 5,720.45</strike> -65%
                  </p>
                </div>
                <div>
                  <span className="user">
                    <i>New User Deal</i>
                  </span>
                </div>
              </div>
            </div>

            <span className="text-xs">Instant discount: Buy 2 get 2% off </span>

            <div className="coupon">
              <div className="relative">
                <img
                  src="https://ae01.alicdn.com/kf/Hcf8a5927756e4373bf1d1b928f2d856fN.png"
                  alt=""
                />
                <span className="absolute top-0">
                  NGN 829.05 Coupons For You
                </span>
              </div>
              <div className="relative">
                <img
                  src="https://ae01.alicdn.com/kf/Hcae789ea016843a785b6ce13e275c8c9u.png"
                  alt=""
                />
                <span className="absolute top-0">4% off, use CHAO138138</span>

                <span style={{ color: "#2E9CC3" }}>Get coupons</span>
              </div>
            </div>

            <div>
              <div>
                <span className="text-sm ">
                  Color:{" "}
                  <span style={{ color: "#999999" }} className="text-xs blue">
                    Blue 116Plus
                  </span>{" "}
                </span>
                <div className="color-parent">
                  <div className="flex justify-between  my-3 ">
                    <span className=" border-2">
                      <img
                        className="px-1 py-1"
                        src="https://ae01.alicdn.com/kf/S73004c4466c848708549a3811d637fc9R/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                        alt=""
                      />
                    </span>
                    <span className=" border-2">
                      <img
                        className="px-1 py-1"
                        src="https://ae01.alicdn.com/kf/Scd451779896e44d4a47017d13b0a84c4F/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                        alt=""
                      />
                    </span>
                    <span className=" border-2">
                      <img
                        className="px-1 py-1"
                        src="https://ae01.alicdn.com/kf/S23ae793f05e54693bb5fd42009c55095F/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                        alt=""
                      />
                    </span>
                    <span className=" border-2">
                      <img
                        className="px-1 py-1"
                        src="https://ae01.alicdn.com/kf/S29b609a5dcad401eb1973521354050764/Smart-Watches-Blood-Pressure-Waterproof-Men-Women-Heart-Rate-Monitor-Fitness-Tracker-Digital-Wrist-Watch-Sport.jpg_50x50.jpg_.webp"
                        alt=""
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sm">Quantity:</span> <br></br>
                <span
                  style={{ backgroundColor: "#F2F2F2" }}
                  className="text-sm rounded-full px-2 py-2 "
                >
                  -
                </span>
                <span className="text-sm mx-1">1</span>
                <span
                  style={{ backgroundColor: "#F2F2F2" }}
                  className="text-sm px-2 py-2 rounded-full"
                >
                  +
                </span>
                <span className="text-xs ml-2">90864 Pieces available</span>
              </div>
              <div>
                <span className="text-sm">Free Shipping :</span>
                <p style={{ color: "#666666" }} className="text-xs">
                  From China to Nigeria via Cainiao Super Economy for Special
                  Goods Estimated delivery on Jun 18{" "}
                </p>
              </div>
              <div></div>
            </div>
            <div className="flex justify-between button-parent align-middle py-2">
              <span
                style={{ backgroundColor: "#FE6F41" }}
                className="text-sm text-white rounded py-2 px-3 "
              >
                Buy Now
              </span>
              <span
                style={{ backgroundColor: "#FF8C1E" }}
                className="text-sm  text-white rounded py-2 px-3"
              >
                Add to Cart
              </span>
              <span></span>
            </div>
          </div>
        </section>
          <section>
            <span className="text-sm">Recommended For You :</span>
            <div className="section-right my-3">
              <div>
                <div>
                  <img
                    src="https://ae01.alicdn.com/kf/Sb2c01ba31d344c5a8ac04ed124f31354M/Smart-Bracelet-Men-Women-Heart-Rate-Blood-Pressure-Monitor-Sports-Band-Fitness-Tracker-Watches-Bluetooth-Step.jpg_220x220q90.jpg_.webp"
                    alt=""
                  />
                  <span>NGN 2,060.19</span>
                </div>
                <div>
                  <img
                    src="https://ae01.alicdn.com/kf/S02f358e01b6642aebd49869eb3fefdd43/2022-Simple-Men-s-Watches-Stainless-Steel-Mesh-Belt-Minimalist-Fashion-Business-Clock-Ultra-Thin-Quartz.jpg_220x220q90.jpg_.webp"
                    alt=""
                  />
                  <span>NGN 2,060.19</span>
                </div>
                <div>
                  <img
                    src="https://ae01.alicdn.com/kf/S6bc7aad129944fae949ae827d12e0c5eT/Smart-Sport-Watches-Women-Men-Fitness-Bracelet-Tracker-Steps-Calorie-Health-Monitor-Bluetooth-Wristwatch-For-Android.jpg_480x480q90.jpg_.webp"
                    alt=""
                  />
                  <span>NGN 2,060.19</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      <FotterDesktop></FotterDesktop>
    </>
  );
}

export default Product;
