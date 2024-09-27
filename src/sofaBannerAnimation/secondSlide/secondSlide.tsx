import styles from "./secondSlide.module.scss"
import bg from "../../assets/secondSlide/Color Fill 1.svg"
import firstSofa from "../../assets/secondSlide/1.svg";
import secondSofa from "../../assets/secondSlide/secondSofa.svg";
import thirdSofa from "../../assets/secondSlide/thirdSofa.svg";
import fourthSofa from "../../assets/secondSlide/fourthSofa.svg";
import fifthSofa from "../../assets/secondSlide/fifthSofa.svg";
import firstColor from "../../assets/secondSlide/color1.svg";
import secondColor from "../../assets/secondSlide/color2.svg"
import thirdColor from "../../assets/secondSlide/color3.svg";
import fourthColor from "../../assets/secondSlide/color4.svg";
import fifthColor from "../../assets/secondSlide/color5.svg";
import btn from "../../assets/secondSlide/Rectangle 1.svg";
import orderNow from "../../assets/secondSlide/Պատվիրել հիմա.svg";
import closeBtn from "../../assets/cross-svgrepo-com.svg"
import { motion } from "framer-motion";
import { useState } from "react";

interface Props{
   closeSlide: ()=> void
}
const SecondSlide =({ closeSlide}:Props)=>{
   const [changeImg, setChangeImg] = useState<string>("")
   let src = firstSofa;
   if(changeImg === "1"){
      src = firstSofa
   } if(changeImg === "2"){
      src = secondSofa
   }if(changeImg === "3"){
      src = thirdSofa
   }if(changeImg === "4"){
      src = fourthSofa
   }if(changeImg === "5"){
      src = fifthSofa
   }
   return <div className={styles.secondSlideContainer}>
  <img src={bg} alt="This is background"  className={styles.secondSlideContainerBg}/>
  <img src={src} alt="" className={styles.secondSlideFirstSofa}
 
  />
  <motion.img src={firstColor} alt="" className={styles.secondSlideFisrtColor} 
   whileHover={{translateY: -10 }}
   onMouseOver={()=> setChangeImg("1")}
   onMouseLeave={()=> setChangeImg("1")}
  />
  <motion.img src={secondColor} alt="" className={styles.secondSlideSecondColor}
  whileHover={{translateY: -10 }}
  onMouseOver={()=> setChangeImg("2")}
  onMouseLeave={()=> setChangeImg("1")}
  />
  <motion.img src={thirdColor} alt="" className={styles.secondSlideThirdColor}
  whileHover={{translateY: -10 }}
  onMouseOver={()=> setChangeImg("3")}
  onMouseLeave={()=> setChangeImg("1")}/>
  <motion.img src={fourthColor} alt="" className={styles.secondSlideFourthColor}
  whileHover={{translateY: -10 }}
  onMouseOver={()=> setChangeImg("4")}
  onMouseLeave={()=> setChangeImg("1")}/>
  <motion.img src={fifthColor} alt="" className={styles.secondSlideFifthColor}
   whileHover={{translateY: -10 }}
   onMouseOver={()=> setChangeImg("5")}
   onMouseLeave={()=> setChangeImg("1")}
  />
  <div  
 >
      <motion.img src={btn} alt="" className={styles.secondSlideBtn}  
      initial={{  scale: 1 }}
      animate={{  scale: 1.1 }} 
      transition={{  duration:1,repeat: Infinity}}/>
      <img src={orderNow} alt="" className={styles.secondSlideOrderNow}/>
  </div>
 <img src={closeBtn} alt="" className={styles.closeBtn} onClick={closeSlide}/>
</div>
}

export default SecondSlide;