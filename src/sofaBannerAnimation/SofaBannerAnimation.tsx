

import { useState } from "react";
import FirstSlide from "./fisrtSlide/FirstSlide.tsx";
import SecondSlide from "./secondSlide/secondSlide.tsx";
import ThirdSlide from "./thirdSlide/ThirdSlide.tsx";
const SofaBannerAnimation =()=>{

const [visibleFirstSlide, setVisibleFirstSlide] = useState<string>("1")
  
   function handleClick1(): void {
     setVisibleFirstSlide("0")
   }
   function handleClick(): void {
      setVisibleFirstSlide("2")
    }
    function handleClick3(): void {
      setVisibleFirstSlide("3")
    }
    function closeSlide(): void {
      setVisibleFirstSlide("1")
    }
   return <>
   {visibleFirstSlide === "1" && <FirstSlide handleClick={handleClick} handleClick3={handleClick3} />}
   {visibleFirstSlide === "2" && <SecondSlide handleClick={handleClick1} closeSlide={closeSlide}/>}
   {visibleFirstSlide === "3" && <ThirdSlide closeSlide={closeSlide}/> }


   </>
}

export default SofaBannerAnimation;