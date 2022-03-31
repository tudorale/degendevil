import style from "../styles/Styles.module.css"
import Navbar from "../components/Navbar";
import {useEffect} from "react";
import Head from "next/head";

function Death() {

    useEffect(() => {
        let bar = document.querySelector(".innerLoadBar");
        bar.style.width = "100%";
    }, [])

  return (
    <div className={style.deathWrapper}>
        <Head>
            <title>DegenDevil - You died!</title>
        </Head>
        <Navbar />

        <div className={style.deathInnerWrapper}>
            <img className={style.failureImg} src="/failed.gif"/>
            <p className={style.deathInfo}>Transformation Failure</p>
        
            <p className={style.deathBtn}>Death</p>

            {/* change with a dynamic value specific to the serum selected */}
            <p className={style.deathInfo} style={{marginTop: "35px"}}>17.5 BOLT LOST</p>
        
            <div className={style.loadBar}>
                <div className={style.innerLoadBar + " " + "innerLoadBar"}></div>
            </div>
        </div>
    </div>
  )
}

export default Death