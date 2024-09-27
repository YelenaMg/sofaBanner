import { motion } from "framer-motion";
import styles from "./thirdSlide.module.scss";
import bg from "../../assets/thirdSlide/Color Fill 1.svg";
import firstTable from "../../assets/thirdSlide/table1 (2).svg";
import secondTable from "../../assets/thirdSlide/table2.svg";
import thirdTable from "../../assets/thirdSlide/table3.svg"
import firstColor from "../../assets/thirdSlide/4.svg";
import secondColor from "../../assets/thirdSlide/2.svg";
import thirdColor from "../../assets/thirdSlide/4 (1).svg";
import closeSvg from "../../assets/thirdSlide/x.svg"
import { useState } from "react";
import btn from "../../assets/secondSlide/Rectangle 1.svg";
import orderNow from "../../assets/secondSlide/Պատվիրել հիմա.svg";
import closeBtn from "../../assets/cross-svgrepo-com.svg"
interface Props {
   closeSlide: ()=>void
}

const ThirdSlide =({closeSlide}:Props)=>{
const [changeImg, setChangeImg] = useState("")
let src = firstTable;
if(changeImg === "1"){
   src = firstTable
} if(changeImg === "second"){
   src = firstTable
}if(changeImg === "2"){
   src = secondTable
}if(changeImg === "3"){
   src = thirdTable
}
   return <div className={styles.thirdSlideContainer}>
      <img src={bg} alt="" />
      <img src={src} alt="" className={styles.thirdSlidefirstTable}/>
      <motion.img src={firstColor} alt="" className={styles.thirdSlideFirstColor}
       whileHover={{translateY: -10 }}
       onMouseOver={()=> setChangeImg("1")}
       onMouseLeave={()=> setChangeImg("second")}/>
       <motion.img src={secondColor} alt="" className={styles.thirdSlideSecondColor}  
       whileHover={{translateY: -10 }}
       onMouseOver={()=> setChangeImg("2")}
       onMouseLeave={()=> setChangeImg("second")}/> 
      <motion.img src={thirdColor} alt="" className={styles.thirdSlideThirdColor}  
  whileHover={{translateY: -10 }}
  onMouseOver={()=> setChangeImg("3")}
  onMouseLeave={()=> setChangeImg("second")}/>
      <img src={closeSvg} alt="" className={styles.thirdSlideCloseSvg} />
      <div  
 >
      <motion.img src={btn} alt="" className={styles.thirdSlideBtn}  
      initial={{  scale: 1 }}
      animate={{  scale: 1.1 }} 
      transition={{  duration:1,repeat: Infinity}}/>
      <img src={orderNow} alt="" className={styles.thirdSlideOrderNow}/>
      <img src={closeBtn} alt="" className={styles.closeBtn} onClick={closeSlide} />
  </div>
     
   </div>
}

export default ThirdSlide