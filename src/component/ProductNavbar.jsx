import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import "../component/ProductNavbar.css";
import Carosel from "./Carosel";
import Mininavabr from "./Mininavabr";

function ProductNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <>
    <section className="product_parent">
    <section className="navbar_parent_modile">
        <img
          className="banner "
          src="https://ae01.alicdn.com/kf/Sd7b1b3b8ae524e7c85c0be732b4e1de0y.jpg_Q90.jpg_.webp"
          alt=""
        />
        <Mininavabr></Mininavabr>
        <Navbar className="navbar_product z-0 " navbar>
          <NavbarContainer className="navbar_inner_product ">
            <NavbarWrapper className="wrapper_product">
              <NavbarBrand>
                <img
                  src="https://ae01.alicdn.com/kf/H2111329c7f0e475aac3930a727edf058z.png"
                  alt=""
                />
              </NavbarBrand>{" "}
              <br />
              <span className="logo_text">
                Smarter, Shopping and Better Leaving!
              </span>
              <NavbarInput
                type="text"
                className="no-underline"
                placeholder="rings for women"
              />
          
              <img src="asset/badge.PNG" alt="" className="badge4" />
            </NavbarWrapper>
            <div className="advert-text">
              <span>watch for men |</span>
              <span className="mx-2"> airpods pro |</span>
              <span className="mx-2">bag |</span>
              <span className="mx-2">laptop |</span>
              <span className="mx-2">power bank 100000mah free shipping |</span>
              <span className="mx-2">sneakers</span>
            </div>
          </NavbarContainer>
        </Navbar>
      </section>

      <section className="navbar_parent_desktop ">
        <img
          className="banner "
          src="https://ae01.alicdn.com/kf/Sd7b1b3b8ae524e7c85c0be732b4e1de0y.jpg_Q90.jpg_.webp"
          alt=""
        />
        <Mininavabr></Mininavabr>
        <Navbar className="navbar_product z-0 " navbar>
          <NavbarContainer className="navbar_inner_product ">
            <NavbarWrapper className="wrapper_product">
              <NavbarBrand>
                <img
                  src="https://ae01.alicdn.com/kf/H2111329c7f0e475aac3930a727edf058z.png"
                  alt=""
                />
              </NavbarBrand>{" "}
              <NavbarInput
                type="text"
                className="no-underline"
                placeholder="I am shopping for ..."
              />
              <span className="span-one py-2.5 text-sm ">On AliExpress</span>
              <span className="span-two py-2.5 text-sm ">in this store</span>
              <img src="asset/badge.PNG" alt="" className="badge4" />
            </NavbarWrapper>
          </NavbarContainer>
        </Navbar>
        <section className=" w-[30vw] store flex justify-between">
          <div>
            <span className="text-sm ">
              AliExpress CHAOGENB Luxury Brand Watch Store
            </span>{" "}
            <br></br>
            <p className="text-sm">
              94.0%{" "}
              <span style={{ color: "#999999" }} className="text-xs">
                {" "}
                Positive feedback
              </span>
            </p>
          </div>
          <div>
            <span
              style={{ backgroundColor: "#FF4747" }}
              className="text-xs text-white rounded-full  px-2 py-1"
            >
              + Follow
            </span>
            <p className="text-xs">
              {" "}
              <span className="font-bold">582</span> Followers
            </p>
          </div>
        </section>
      </section>
    </section>
    
    </>
  );
}

export default ProductNavbar;
