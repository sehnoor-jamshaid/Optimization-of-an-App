import React from "react";

const Shimmer=()=>
{ console.log("Simmer")
return (
   <div style={{display:"flex"}}>
   {[1,2,3,4].map((val)=>
    (
        <div className="loading-container">
        <div className="loading_img_cont">
          {/* <img alt="card" src={IMAGE_CDN+cloudinaryImageId} className="image" /> */}
        </div>
        <div className="loading_title">
        
        </div>
        <div className="loading_content_cont">
          
        </div>
      </div>
    )) }
    </div>
)
}
export default Shimmer;