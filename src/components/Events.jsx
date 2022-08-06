import React from 'react'
import {AiOutlineUp} from "react-icons/ai"

const Events = () => {

    function scrollToTop(){
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        })
      }
    return(
        <div>
            <button className="bnt-top" onClick={()=>{scrollToTop()}}> <AiOutlineUp id="bnt-top" /> </button>
        </div>
    )
}

export default Events