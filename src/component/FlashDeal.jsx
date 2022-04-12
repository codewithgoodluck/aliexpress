import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import imtemData from "./Data/Itemdata";
import "../component/FlaashDeal.css";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import datas from "../component/Data/Flash"

function FlashDeal({image,price}) {

 

  return (
    <section className="bg-white flash relative max-w-6xl max-auto mx-3 ">
        <section>
          <section className="  h-10 pb-10 container">
        <div className="flash flex justify-between mt-5  my-4  ">
          <div className="flex mt-2">
            <span>
              {" "}
              <img
                src="https://ae01.alicdn.com/kf/Ha6c5ddc0937a4e438dfd4cd648e8f068T.png_.webp"
                alt=""
              />
            </span>
            <span className="text-sm mt-1 ml-1">Flash Deal</span>
          </div>

          <div className="bg-black text-white rounded text-lg mt-2">
            <Countdown date={Date.now() + 50000} />
          </div>
        </div>
        
      </section>
      <span className=" absolute top-10 ml-3 limited text-xs ">Limited Deals</span>

      <div class="grid flash_body  grid-cols-3 gap-3 mt-4 container">
     {
       datas.map((data)=>{
         return<div className="g_parent">
           <div className="flash_child">
           <div className="image">
           <img
             src={data.image}
             alt=""
            
           />
           </div>
 
           <span className="text-sm parent_sale ">
             <img
               src="https://ae01.alicdn.com/kf/Hdbddffe917354b768ae9dc10f2b47fb4v.png"
               alt=""

          
             />
             <span className="text-white parent_sale_text  text-xs">Hot <span className="sale-col">Sale</span></span>
           </span>
           <span className="text-sm ">
             &#x20A6; <span className="pl-1">{data.price}</span>
           </span>
         </div>

         </div>
         
      
       })
     }
    </div>


        </section>
    </section>
  );
}

export default FlashDeal;
