
import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import "../component/Nabar.css"
import Carosel from "./Carosel";
import Mininavabr from "./Mininavabr";



function Navbarmain() {
  const [openNavbar, setOpenNavbar] = useState(false);
 
  return (
 <>
   <img className="banner " src="https://ae01.alicdn.com/kf/Sd7b1b3b8ae524e7c85c0be732b4e1de0y.jpg_Q90.jpg_.webp" alt="" />
   <Mininavabr></Mininavabr>
    <Navbar className="navbar  "  navbar>
    <NavbarContainer className="navbar_inner ">
        <NavbarWrapper className="wrapper">
            <NavbarBrand>
              
              <img src="https://ae01.alicdn.com/kf/H2111329c7f0e475aac3930a727edf058z.png" alt="" />
             
              </NavbarBrand> <br />
              <span className="logo_text">Smarter, Shopping and Better Leaving!</span>
            <NavbarInput type="text" className="no-underline" placeholder="rings for women" />
            
            {/* <img src="asset/icons.PNG" alt="" className="icons" /> */}
            <img  src="asset/badge.PNG" alt="" className="badge4" />
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


   
  
 </>
  )
}

export default Navbarmain