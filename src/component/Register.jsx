import React, { useState, useContext } from "react";
import "../component/Mini.css";
import { ModalProvider } from "../Context/ModalContext";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Select from "react-select";
import Login from "./Login";

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

function Register() {
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
<>  <section className="mx-20">
          

          <div className="App mt-10">
            <Select
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
            >
              {" "}
              Your Location
            </Select>
          </div>
          <span
            style={{ color: "#999999" }}
            className="underline-offset-1 text-xs"
          >
            why chose s location ?
          </span>

          <div className="modal_c mt-3">
            <label>
           
              <input placeholder="Email address" className=" rounded w-[26.5vw] h-[8vh] pl-3 border-1" type="text" name="name" />
            </label>
          </div>

          
          <div className="modal_c mt-3">
            <label>
           
              <input placeholder="Password" className=" rounded w-[26.5vw] h-[8vh] pl-3 border-1" type="text" name="name" />
            </label>
          </div>

          <div className="text-center">
          <button style={{backgroundColor:"#FF9B80"}} className="mt-3 w-100 text-white rounded-full py-2">Create account</button>
          </div>
          <div className="flex w-full justify-center my-4 ">
            <div className="w-25 mt-2.5 mr-4">   <hr /></div>
           <span> Or continue with</span>
            <div  className="w-25 mt-2.5 ml-4"> <hr></hr></div>
          </div>

          <div className="flex my-3 justify-center">
            <img className="w-[5vh] " src="https://www.facebook.com/images/platform/dialog/oauth/consumer/gdpv5/fbIcon_round_gradient.png" alt="" />
            <img className="w-[5vh] mx-3 " src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="" />
            <img className="w-[5vh] " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEX///9mZmZjY2NfX19bW1tXV1f8/Pzo6Ohvb29qamrb29vw8PD09PSkpKR6enqHh4fi4uLS0tLGxsaVlZW8vLzMzMy1tbWurq6NjY2bm5uBgYF0dHRc/6yQAAADvklEQVRoge2a2XLkIAxFDQK877v9//852J3MGNKdIKMiNTO5D/3SLk6xSEhCUfSjv00qHqe+V4Gp+VSnICAJy81nLjhjjO8huWpgwE7xKiA2XwRj4blNCuw3tw6Gbc+NfRPMobAZv2CZGANhGwPLeBwGm6cmdguDjWq4YhlMYbCTYKbyINjYwsIaBBstYE03zKlqpUkVgYy3Ns5ysDuh4dZ0myDYaDZ3Vw5hsMpcZlGGwWpXZZjQEggbZVfjhTpYnDFeuBAwnBv+BBmh3LLB5aIOZEDvXK4lZJ2FpGovmez7tnZFWKqWUtZhUsUhqhOmmnFe+6Xuy655OabOUcp+S1Ktql6nzHcVVFvuHACOrdS/+zo+udnzsazY+c15zo7vk7X1QBdDxeHqDfWQ6dIZ6GLsEwDrijg+rIa7K94lwh7vtBuNfpuMyspUPvnm8V3V3qHm9asR9ZCwDHGRTZW0Iw7jM7niF7vlnw15oFPxbDkMwY6NfAb5xZBu4hznVWYa7HHAMOAPcbEHGJG6dHRYTLiXsa/OC0quoYjaabFp58YtPzUgNLZ3zJkyys1l4BzdVpSrDI5rrMM1Kss9JNw9dEI4Xele7bBzPB9hUoiebrq8cr+Ac8JVFgjPPBA65t4dGy1085WIq9fM8byEKmVldC7S3WNEtNuLKWXRWRGuEL2RcVEltILu5hWY7Y3prAgwMbtdb/QQx+TilFc+JmAn5KIK7//AfL9tnb/pXKHsiJArMNVZQvsFzK1P6K94guAWhEEs5mApwlwB9UJJGF4xhuBSpoKYp1HKRJ/v7lzCuA5lwoRx7CHn0M56m/EU4o2Ftsbg/mBImnUjgnfKfPAEOxoT7QYz97rKRLrBWsItgI9pN5gddTOn/JuyrvIQF6uDIc/UC60F7GuDIow5LmCHyg5pve5N0mGLSYvPDzlVlBT9fN1uJloffUg6PefE1FzXStaH9hdPScfQ0m4I8ZR7JasnnbB0TpVIJ4xpMaQ80pgHM6ttzguLamQZyCacol5EFVXlDtsLRnQtYWr9D9E8iaJeYR+iWOk7HXeFP/ded1TrvdI3u2V9vQfilc6U38Ukbndl5T6xFqqSZCm+7y/BqyW5eQ0+24VeY9EOwwLzZ2NzIWBby3JJQT6Fw+bbCZUn9uHiUvTdu4WobKrlh0Ye6bG371LrZVgOMllbu89sXFNxWRfgNC2rWXU0dWmmgGp+3kpWtGui/z7bw8RC1V+osnlL0mrt4k8OS9EM5bJt9Uza1aiK3OWk2K1+P/o/9QuuazK9pg4CqQAAAABJRU5ErkJggg==" alt="" />
            <img className="w-[5vh]  mx-3 rounded " src="data:image/png;base64,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" alt="" />

          </div>
          <div className="text-center text-xs">
            show all 
          </div>

          <div className="text-center text-xs my-3">
          By creating an account, you agree to the <span style={{color:"#2277FF"}}>AliExpress.com Free Membership Agreement</span> and <span style={{color:"#2277FF"}}>Privacy Policy</span> 
          </div>
         
        </section></>
  )
}

export default Register