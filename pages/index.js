import Navbar from '../components/Navbar';
import style from "../styles/Wallet.module.css";
import Link from "next/link";
import Head from "next/head";

function wallet() {

    const handleEnter = () => {
        let red = document.querySelector(".redSerum");
        red.style.opacity = "0";
        red.style.zIndex = "-1";

        let redScientist = document.querySelector(".scientistRed");
        redScientist.style.opacity = "0";
        redScientist.style.zIndex = "-1";

        let greenScientist = document.querySelector(".scientistGreen");
        greenScientist.style.opacity = "1";
        greenScientist.style.zIndex = "3";

        let greenS = document.querySelector(".serumGreen");
        greenS.style.opacity = "1";
        greenS.style.zIndex = "3";

        let btn = document.querySelector(".selectWallet");
        btn.style.borderColor = "#0dd50a";
        btn.style.color = "#0dd50a"
    }

    const handleLeave = () => {
        let redScientist = document.querySelector(".scientistRed");
        redScientist.style.opacity = "1";
        redScientist.style.zIndex = "3";

        let greenScientist = document.querySelector(".scientistGreen");
        greenScientist.style.opacity = "1";
        greenScientist.style.zIndex = "-1";

        let red = document.querySelector(".redSerum");
        red.style.opacity = "1";
        red.style.zIndex = "3";

        let greenS = document.querySelector(".serumGreen");
        greenS.style.opacity = "0";
        greenS.style.zIndex = "-1";

        let btn = document.querySelector(".selectWallet");
        btn.style.borderColor = "#D31313";
        btn.style.color = "#D31313"
    }

  return (
      <>
        <Head>
            <title>DegenDevil - Connect Wallet</title>
        </Head>
        <div className={style.walletWrapper}>
            <Navbar/>

            <div className={style.innerWrapper}>
                <div className={style.additionalWrapper}>
                    <div className={style.scientistOverlay} onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
                    <div className={style.serumWrapper + " " + style.serumRed}><img src="/walletserumred.png" className={style.redSerum + " " + "redSerum"}/></div>
                    <div className={style.serumWrapper + " " + style.serumGreen + " " + "serumGreen"}><img src="/p4.png"/></div>
                    <div className={style.scientist} onMouseEnter={handleEnter}>
                        <img src="/scientistred.png" className={style.scientistRed + " " + "scientistRed"}/>
                        <img src="/scientistgreen.png" className={style.scientistGreen + " " + "scientistGreen"}/>
                    </div>
                </div>

                {/* connect wallet!!! */}
            
                <Link href="/serum" passHref><p  onMouseLeave={handleLeave} onMouseEnter={handleEnter} className={style.selectWallet + " " + "selectWallet"}>Select Wallet</p></Link>
                <p className={style.recent}>Recent Transformations</p>
            
                {/* recent!!! */}
                <div className={style.transformations}>
                    <div>
                        <img src="/green.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.green + " " + style.drank}>Drank Lamport Serum</span> : <span className={style.success}>Success</span></p>
                    </div>
                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 1.19209e-07 364 1.19209e-07C475.533 1.19209e-07 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                    <div>
                        <img src="/blue.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.blue + " " + style.drank}>Drank Cluster Serum</span> : <span className={style.failed}>Failed</span></p>
                    </div>
                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 1.19209e-07 364 1.19209e-07C475.533 1.19209e-07 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                    <div>
                        <img src="/purple.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.purple + " " + style.drank}>Drank Epoch Serum</span> : <span className={style.success}>Success</span></p>
                    </div>
                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 1.19209e-07 364 1.19209e-07C475.533 1.19209e-07 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                    <div>
                        <img src="/red.png"/>
                        <p>Wallet (Uidr456...)  <span className={style.red + " " + style.drank}>Drank Finality Serum</span> : <span className={style.failed}>Failed</span></p>
                    </div>
                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 1.19209e-07 364 1.19209e-07C475.533 1.19209e-07 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                </div>

                <p className={style.showMore}>Show more</p>

                <div className={style.walletLinks}>
                    <Link href="/how">How to Play</Link>
                    <Link href="/faqs">FAQs</Link>
                    <Link href="/story">Story Line</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default wallet;