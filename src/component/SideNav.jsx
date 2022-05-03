import React, {useState} from "react";
import "../component/Sidenav.css";



function SideNav(props) {
  const [show, toggleShowme] = React.useState(true);

  function hideShow(){
    toggleShowme(props.megaM)
  }

  function hoverItem (e){
    e.target.style.color="#FF4747"

  }

  function leaveItem (e){
    e.target.style.color="black"
  }
  
  return (
    <>
      <section className="bg-white w-60 ml-20 ">
        <div className="left_sidenave">
          <img onMouseOver={hoverItem } onMouseLeave={leaveItem}  src="asset/Category.PNG" alt="" />
          <span  onMouseOver={hoverItem } onMouseLeave={leaveItem}   className="text-sm">Category</span>
        </div>

        <div className="left_sidenave_inner">
          <img src="asset/women.PNG" alt="" />
          <span  onMouseLeave={leaveItem}   onMouseOver={hoverItem } className="text-xs">Womens Fashion</span>
        </div>
        
        <div className="left_sidenave_inner">
          <img src="asset/Men.PNG" alt="" />
          <span onClick={hideShow} onMouseLeave={leaveItem}   onMouseOver={hoverItem } className="text-xs">Mens Fashion</span>
        </div>
       
        <div className="left_sidenave_inner">
          <img src="asset/computer.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}   className="text-xs">Computer & Phone security</span>
        </div>

        <div className="left_sidenave_inner">
          <img src="asset/Electronic.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}   className="text-xs">Consumer Electronic</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/jewery.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem} onClick={hideShow}  className="text-xs">Jewery & Watches</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/home.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Mens Fashion</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Bag.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Bags & Shoes</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Toy.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Toy Kids & Babies</span>
        </div>

        <div className="left_sidenave_inner">
          <img src="asset/Outdoor.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Outdoor Fun & Sport</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Beauty.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Beauty, Health & Hair </span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Automobile.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Automobile & Motocycle</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Men.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Mens Fashion</span>
        </div>

        <div className="left_sidenave_inner">
          <img src="asset/Toy.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Toy Kids & Babies</span>
        </div>

        <div className="left_sidenave_inner">
          <img src="asset/Outdoor.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem} className="text-xs">Outdoor Fun & Sport</span>
        </div>
        <div className="left_sidenave_inner">
          <img src="asset/Beauty.PNG" alt="" />
          <span onMouseOver={hoverItem } onMouseLeave={leaveItem}  className="text-xs">Beauty, Health & Hair </span>
        </div>
      </section>
    </>
  );
}

export default SideNav;
