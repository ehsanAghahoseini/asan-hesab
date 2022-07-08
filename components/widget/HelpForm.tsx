import { useState, useRef, useEffect } from "react";
export declare type HelpProps = {
    description: string,
}

const HelpForm = ({description}:HelpProps) => {
    const[displayMore , setDisplayMore]=useState(false)

    return (
        <div className="help-form">
           <span className="help-form-title">راهنمای استفاده :</span>
           <span>
            {displayMore ? description : description.substring(0,100)}
           </span>
           <span className="help-form-more">
               {displayMore ? 
               <span onClick={()=>{setDisplayMore(false)}}>بستن</span>
               :
               <span onClick={()=>{setDisplayMore(true)}}>بیشتر بخوانید ...</span>
               }
            </span>
        </div>
    )
}

export default HelpForm;