import styles from "../sofaBannerAnimation.module.scss";
import sofaSvg from "../../assets/sofa/divan and bg.svg"
import gradient from "../../assets/sofa/Gradient Fill 1.svg"
import text from "../../assets/sofa/Պրեմիում որակի բազմոցներ ԵՎ սեղաններ.svg"
import table from "../../assets/sofa/sexan.svg"
import plus from "../../assets/sofa/+.svg"
import logo from "../../assets/sofa/LCLogo.svg"
interface Props{
   handleClick:  () => void;
   handleClick3: ()=> void
}
const FirstSlide =({handleClick, handleClick3}:Props)=>{
   return <div className={styles.sofaBannerAnimContainer}>
   <img src={sofaSvg} alt="" className={styles.img1}/>
   <img src={gradient} alt="" className={styles.img2}/>
   <img src={text} alt="" className={styles.img3}/>
   <img src={table} alt="" className={styles.img4}/>
   <img src={logo} alt="" className={styles.logo} />
   <img src={plus} alt=""  className={styles.plusFirst} onClick={handleClick3}/>
   <img src={plus} alt=""  className={styles.plusSecond} onClick={handleClick} />
</div>
}

export default FirstSlide;