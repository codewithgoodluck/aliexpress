import React from "react";
import Carosel from "../component/Carosel";
import Item from "../component/Item";
import Navbarmain from "../component/Navbarmain";
import Navbar from "../component/Navbarmain";
import itemData from "../component/Data/Itemdata";
import FlashDeal from "../component/FlashDeal";
import datas from "../component/Data/Flash"
import { Flag } from "@mui/icons-material";
import WeeklyDeal from "../component/WeeklyDeal";
import More2Love from "../component/More2Love";
import Footer from "./Footer";
import SuperDeal from "../component/SuperDeal";
import Topselection from "../component/Topselection";
import Category from "../component/Category";
import More2loveDesktop from "../component/More2loveDesktop";
import FotterDesktop from "../component/FotterDesktop";
import MegaMenue from "../component/MegaMenue";

function Home() {


  
  return (
    <h1 className="text-3xl font-bold underline">
      <Navbarmain></Navbarmain>
      <Carosel></Carosel>
      <div class="grid  grid-cols-5 gap-1 h-50  container ">
        {itemData.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
       
       <div>
          {
            datas.map((data)=>{
               return <FlashDeal key={data.id} {...data}></FlashDeal>
            })  
          }
       </div>
       <FlashDeal></FlashDeal>
       <SuperDeal></SuperDeal>
       <Topselection></Topselection>
       <Category></Category>
       <More2loveDesktop></More2loveDesktop>
       <WeeklyDeal/>
       <More2Love></More2Love>
       <Footer></Footer>
       <FotterDesktop></FotterDesktop>


       {/* PRODUCT PAGE START */}
      
       

    </h1>
  );
}

export default Home;
