import React from 'react'

function Login() {
  return (  <>     
   <section className="mx-20">


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
   </section>
   </>
  )
}

export default Login