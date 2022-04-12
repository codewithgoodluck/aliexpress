import React from "react";
import "../Pages/Footer.css";

function Footer() {
  return (
    <div className="container footer fixed bg-white bottom-0">
      <div className="flex  justify-between mx-2">
        <div className="footer">
          <img
            src="https://ae01.alicdn.com/kf/HTB19h8qbzzuK1RjSspe762iHVXau.png"
            alt=""
          />
          <span className="text-sm ml-2 ">Home</span>
        </div>
        <div className="footer">
          <img
            src="https://ae01.alicdn.com/kf/HTB1sWelbzDuK1RjSszd760GLpXa2.png"
            alt=""
          />
          <span className="text-sm ml-2 ">Category</span>
        </div>
        <div className="footer">
          <img
            src="https://ae01.alicdn.com/kf/HTB11rFmbzzuK1Rjy0Fp761EpFXav.png"
            alt=""
          />
          <span className="text-sm ml-2 ">Cart</span>
        </div>
        <div className="footer">
          <img
            src="https://ae01.alicdn.com/kf/HTB11rFmbzzuK1Rjy0Fp761EpFXav.png"
            alt=""
          />
          <span className="text-sm ml-2 ">Account</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
