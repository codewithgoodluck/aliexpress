import React, { useState, useContext } from "react";
import "../component/Mini.css";
import { ModalProvider } from "../Context/ModalContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Select from "react-select";
import Login from "./Login";
import Register from "./Register";

const options = [
  {
    value: "chocolate",
    label: (
      <div className="active ">
        <span className="text-xs">Your location:</span>
        <div className="flex">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAMAAAD0WI85AAAAHlBMVEUBh1L///8Ah1IGiFQAg0t+sZXv7+/28/V5rZAAhU5k681KAAAA6UlEQVR4nO3csQ6CQBREURQQ+P8fVmNiYfE0eRTu5GwBiY17c6Zmmrvn2Ldb82z70b7GNF+bZ1kv7bMu3Vs8Q6beOSekeYlXyCPlOr1fH4+vv54k8sM/V1fJEokJMS0iRIiMJRITYlpEiNQiMSGmRYRILRITYlpEiNQiMSGmRYQIkbFEYkJMiwiRWiQmxLSIEKlFYkJMiwiRWiQmxLSIECEylkhMiGkRIVKLxISYFhEitUhMiGkRIUJkLJGYENMiQqQWiQkxLSJEapGYENMiQqQWiQkxLSJEiIwlEhNiWn8mkvKhsJBPt90BvlY8OXffu9wAAAAASUVORK5CYII="
            height="20px"
            width="20px"
          />
          <span className="pl-2">Nigeria</span>
        </div>
      </div>
    ),
  },
  {
    value: "",
    label: (
      <div className=" ">
        <span className="text-xs">Your location:</span>
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            height="20px"
            width="20px"
          />
          <span className="pl-2">Canada</span>
        </div>
      </div>
    ),
  },
  {
    value: "",
    label: (
      <div className=" ">
        <span className="text-xs">Your location:</span>
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            height="20px"
            width="20px"
          />
          <span className="pl-2">USA</span>
        </div>
      </div>
    ),
  },
  {
    value: "UK",
    label: (
      <div className=" ">
        <span className="text-xs">Your location:</span>
        <div className="flex">
          <img
            src="data:image/png;base64,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"
            height="20px"
            width="20px"
          />
          <span className="pl-2">UK</span>
        </div>
      </div>
    ),
  },
 
];

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Mininavabr() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(!showResults)

  const [selectedOption, setSelectedOption] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openModal, setModal] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let accessModal = useContext(ModalProvider);

  const [isShown, setIsShown] = useState(false);
  const [isShownBox, setIsShownBox] = useState(false);

  function changeBGConHover(e) {
    e.target.style.background = "white";
  }

  function changeBGConLeave(e) {
    e.target.style.background = "#F2F2F2";
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* REGISTER */}
            
            <section className="mx-20">
            <div className="text-center mt-10 ">
              <span onClick={onClick}  className="font-bold">Register</span>
              <span  onClick={onClick} className="ml-5">Sign In</span>
              
            </div>
            </section>
          
           
      
          { showResults ?  <Register/> : <Login/>   }
        </Box>
      </Modal>

      {/* {setSign ? <Login/> : null} */}

  

      <div className="mini mini_navbar flex justify-end">
        <select>
          <option value="grapefruit" className="text-sm">
            Seller Login
          </option>
          <option selected className="text-sm" value="coconut">
            Sell on aliexpress
          </option>
        </select>
        <span className="mx-3 slash">|</span>
        <select className="w-[5vw]">
          <option value="grapefruit" className="text-sm">
            Seller Login
          </option>
          <option selected className="text-sm" value="coconut">
            Help
          </option>
        </select>

        <section className="flex ml-3">
          <span className="other">Buyer Protection</span>
          <div className="flex mx-4">
            <span className="mt-2">
              <img src="../asset/Phone.PNG" alt="" />
            </span>
            <span className="other ml-3">App</span>
          </div>

          {isShown && (
            <div
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              className=" account px-4 py-3 z-50"
            >
              <span className="text-sm">Welcome to AliExpress!</span>

              <div className="mb-3 ">
                <button
                  onClick={handleOpen}
                  style={{ backgroundColor: "#FF4747" }}
                  className="text-sm text-white py-2 rounded px-4"
                >
                  Join
                </button>
                <button
                  style={{ backgroundColor: "#FFAD85", color: "#FF4747" }}
                  className="text-sm py-2 rounded px-4 ml-3"
                >
                  Sign In
                </button>
              </div>
              <hr />
              <ul>
                <li
                  onMouseOver={changeBGConHover}
                  onMouseLeave={changeBGConLeave}
                  className="text-sm my-2"
                >
                  My Orders
                </li>
                <li
                  onMouseOver={changeBGConHover}
                  onMouseLeave={changeBGConLeave}
                  className="text-sm my-2"
                >
                  Message Center
                </li>
                <li
                  onMouseOver={changeBGConHover}
                  onMouseLeave={changeBGConLeave}
                  className="text-sm my-2"
                >
                  Wish List
                </li>
                <li
                  onMouseOver={changeBGConHover}
                  onMouseLeave={changeBGConLeave}
                  className="text-sm my-2"
                >
                  My Favourite Store
                </li>
                <li
                  onMouseOver={changeBGConHover}
                  onMouseLeave={changeBGConLeave}
                  className="text-sm"
                >
                  My Coupon
                </li>
              </ul>
            </div>
          )}
          
        </section>

        <span className="mx-3 slash">|</span>

        <section className="flex ml-3">
          <div className="flex  ">
            <span className="mt-2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAALVBMVEUBh1L///8FilUCiE8AiEzv/fgqf1jl5eUug1wIjVgFi1IAjFDZ6eL9/P3v//edG7nyAAABoElEQVR4nO3Sy20CARQEQVjA7Jf8w7U4+tzSO1jVGUxpbtsy0n6s53uocz32mVXbbbmN9Hiur/tQn/X5mFm1zPH9vK4Zvev18y/5ZvTud3z4/oYvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4Uv9eW7ZvSuL9+M3yDfOva+z+D7tmWk/VjP91Dneuwzq7Zf3YZiRF/vAsoAAAAASUVORK5CYII="
                alt=""
              />
            </span>
            <span className="other ml-3">/English/NGN</span>
          </div>

          <span className="mx-3 lg slash">|</span>

          <div className="flex  ">
            <span className="mt-1">
              <img src="../asset/love.PNG" className="icon" alt="" />
            </span>
            <span className="other ml-3">Wish List</span>
          </div>

          <div className="flex mini mx-4  ">
            <span className="mt-0.5">
              <img src="../asset/account.PNG" className="icon2" alt="" />
            </span>
            <span
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(true)}
              className="other  ml-3 lg:ml-1"
            >
              Account
            </span>
          </div>
        </section>
      </div>
    </>
  );
}

export default Mininavabr;
