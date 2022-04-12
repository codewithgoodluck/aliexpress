import React from "react";
import "../component/Mini.css";

function Mininavabr() {
  return (
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
        <span className="mt-2"><img src="../asset/Phone.PNG" alt="" /></span>
        <span className="other ml-3">App</span>
        </div>
        
      </section>



      <span className="mx-3 slash">|</span>
     
      <section className="flex ml-3">
        <div className="flex  ">
        <span className="mt-2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAALVBMVEUBh1L///8FilUCiE8AiEzv/fgqf1jl5eUug1wIjVgFi1IAjFDZ6eL9/P3v//edG7nyAAABoElEQVR4nO3Sy20CARQEQVjA7Jf8w7U4+tzSO1jVGUxpbtsy0n6s53uocz32mVXbbbmN9Hiur/tQn/X5mFm1zPH9vK4Zvev18y/5ZvTud3z4/oYvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4UvhS+FL4Uv9eW7ZvSuL9+M3yDfOva+z+D7tmWk/VjP91Dneuwzq7Zf3YZiRF/vAsoAAAAASUVORK5CYII=" alt="" /></span>
        <span className="other ml-3">/English/NGN</span>
        </div>


        <span className="mx-3 lg slash">|</span>


       <div className="flex  ">
       <span className="mt-1"><img src="../asset/love.PNG" className="icon" alt="" /></span>
        <span className="other ml-3">Wish List</span>
       </div>

        <div className="flex mini mx-4  ">
        <span className="mt-0.5"><img src="../asset/account.PNG" className="icon2" alt="" /></span>
        <span className="other  ml-3 lg:ml-1">App</span>
        </div>

        
        
      </section>
   
    </div>
  );
}

export default Mininavabr;
