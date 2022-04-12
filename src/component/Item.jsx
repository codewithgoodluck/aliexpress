import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import imtemData from "../component/Data/Itemdata";
import "../component/Item.css";

function Item({ image, name }) {
  return (
 <div className=" max-w-6xl g_parent ">
      <div className=" g_parent_item  ">
      <img className="w-10" src={image}  alt="" />
      <span className=" text ">{name}</span>
 
    </div>
 </div>

    // <div className="gird  grid-flow-cols-5 gap-4	 container">
    //   <div className="item ">
    //     <img
    //       src="https://ae01.alicdn.com/kf/Ha5ff5f327bfb4c44820ece8a2de04394t/150x150.png_.webp"
    //       alt=""
    //     />
    //     <span className="text-xs">All category</span>
    //   </div>
    //   <div className="item ">
    //     <img
    //       src="https://ae01.alicdn.com/kf/Ha5ff5f327bfb4c44820ece8a2de04394t/150x150.png_.webp"
    //       alt=""
    //     />
    //     <span className="text-xs">All category</span>
    //   </div>
    //   <div className="item ">
    //     <img
    //       src="https://ae01.alicdn.com/kf/Ha5ff5f327bfb4c44820ece8a2de04394t/150x150.png_.webp"
    //       alt=""
    //     />
    //     <span className="text-xs">All category</span>
    //   </div>
    // </div>
  );
}

export default Item;
