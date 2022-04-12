import React from 'react'
import "../component/MoreDesktop.css"
import "../component/More2Love.css"
import datas from "../component/Data/MoreLove.js"

function MoreDesktop() {
  return (
    <section className='container'>
        
  
    <span className="text-sm mt-1 ml-2">More to Love</span>
    <section className='grid grid-cols-2 gap-2  container'>
        {
            datas.map((data)=>{
                return<div className='g_parent'>
                    <div className='more_parent mb-3 bg-white'>  <img src={data.image} className='image' alt="" />
                <span >{data.name}</span>
                <div className='flex inner_parent' >
                   
                        <img src="https://ae01.alicdn.com/kf/Hdfcf30e2ffca4b43a31b455805f64db0H.png" alt="" />
                        <span className='text-xs ml-1'>4.5 | 4.79000 Sold</span>
                      
                </div></div>
              
            </div>
            })
            
        }
   
    </section>
</section>
  )
}

export default MoreDesktop