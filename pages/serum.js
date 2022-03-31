import Navbar from '../components/Navbar'
import style from "../styles/Serum.module.css"
import Link from "next/link";
import Head from "next/head";

function Serum() {
    const handleEnter = () => {
        let gray = document.querySelector(".graySerum");
        gray.style.opacity = "0";
        gray.style.zIndex = "-1";

        let greenS = document.querySelector(".greenSerum");
        greenS.style.opacity = "1";
        greenS.style.zIndex = "3";

        let btn = document.querySelector(".activateSerum");
        let text = document.querySelector(".click");
        let glow = document.querySelector(".activateGlow");

        btn.style.color = "#0FD50A";
        btn.style.border = "unset";
        btn.style.padding = "7px 22px"
        text.style.color = "#0FD50A";
        glow.style.opacity = "1";
        btn.style.boxShadow = "inset 0px 0px 15px #0FD50A";
    }

    const handleLeave = () => {
        let gray = document.querySelector(".graySerum");
        gray.style.opacity = "1";
        gray.style.zIndex = "3";

        let greenS = document.querySelector(".greenSerum");
        greenS.style.opacity = "0";
        greenS.style.zIndex = "-1";

        let btn = document.querySelector(".activateSerum");
        let glow = document.querySelector(".activateGlow");
        let text = document.querySelector(".click");

        btn.style.color = "#027400";
        btn.style.padding = "5px 20px"
        btn.style.border = "2px dashed #027400";
        text.style.color = "#027400";
        btn.style.boxShadow = "unset";
        glow.style.opacity = "0";
    }

  return (
    <>
        <div className={style.serumPage}>
            <Head>
                <title>DegenDevil - Activate Serum</title>
            </Head>
            <Navbar />

            <div className={style.innerWrapper2}>
                <div className={style.additionalWrapper2}>
                    <div className={style.serumWrapper2}><img className={style.graySerum + " " + "graySerum"} onMouseEnter={handleEnter} src="/gray.png"/></div>
                    <div><img className={style.greenSerum + " " + "greenSerum"} src="/G.png" onMouseLeave={handleLeave}/></div>
                </div>

                <div style={{display: "flex", width: "fit-content", margin: "0 auto"}}>
                    <Link href="/consume" passHref><p className={style.activateSerum + " " + "activateSerum"} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Activate Serum</p></Link>
                    <div className={style.activateGlow + " " + "activateGlow"} onMouseEnter={handleEnter}></div>
                </div>
                <p className={style.click + " " + "click"}  onMouseEnter={handleEnter} onMouseLeave={handleLeave}>Click to Select Nanobot Serum</p>
            
                <p className={style.recent}>Recent Transformations</p>

                <div className={style.transformations2}>
                    <div>
                        <img src="/green.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.green + " " + style.serumDrank}>Drank Lamport Serum</span> : <span className={style.success}>Success</span></p>
                    </div>
                    <div>
                        <img src="/blue.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.blue + " " + style.serumDrank}>Drank Cluster Serum</span> : <span className={style.failed}>Failed</span></p>
                    </div>
                    <div>
                        <img src="/purple.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.purple + " " + style.serumDrank}>Drank Epoch Serum</span> : <span className={style.success}>Success</span></p>
                    </div>
                    <div>
                        <img src="/red.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.red + " " + style.serumDrank}>Drank Finality Serum</span> : <span className={style.failed}>Failed</span></p>
                    </div>
                </div>

                <p className={style.showMore2}>Show more</p>
            </div>
        </div>
    </>
  )
}

export default Serum