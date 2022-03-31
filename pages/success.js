import style from "../styles/Styles.module.css"
import Navbar from "../components/Navbar";
import {useEffect} from "react";
import Head from "next/head";

function Success() {

    useEffect(() => {
        let bar = document.querySelector(".successInnerLoadBar");
        bar.style.width = "100%";
    }, [])

  return (
    <div className={style.successWrapper}>
        <Head>
            <title>DegenDevil - Summon Granted</title>
        </Head>
        <Navbar />

        <div className={style.successInnerWrapper}>
            <img className={style.successImg} src="/success.png" />
            <p className={style.successInfo}>Transformation Success</p>
            <p className={style.summonGranted}>Summon Granted</p>

            <p className={style.successBtn}>CLAIM REWARD</p>
        
            <div className={style.successLoadBar}>
                <div className={style.successInnerLoadBar + " " + "successInnerLoadBar"}></div>
            </div>
        </div>
    </div>
  )
}

export default Success