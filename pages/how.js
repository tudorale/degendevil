import style from "../styles/How.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function How() {
  return (
    <div className={style.howWrapper}>
        <Navbar />
        <Head>
            <title>DegenDevil - How to Play</title>
        </Head>

        <div className={style.innerHow}>
            <p className={style.howText}>How to Play</p>

            <div className={style.step1}>
                <p>Connect your Wallet</p>
                <div className={style.wallets}>
                    <div>
                        <span>Phantom</span>
                        <img src="/phantom.png"/>
                    </div>
                    <div>
                        <span>Solflare</span>
                        <img src="/solflare.png"/>
                    </div>
                    <div>
                        <span>Ledger</span>
                        <img src="/ledger.png"/>
                    </div>

                    <div>
                        <span>Slope</span>
                        <img src="/slope.png" style={{borderRadius: "50%"}}/>
                    </div>
                    <div>
                        <span>Torus</span>
                        <img src="/torus.png"/>
                    </div>
                    <div>
                        <span>Sollet</span>
                        <img src="/sollet.png"/>
                    </div>
                </div>
            </div>

            <div className={style.step2}>
                <p>Select Nanobot Serum</p>
                <div className={style.serumsGrid}>
                    <div className={style.step2Finality}>
                        <div className={style.serumImage}>
                            <img src="/finality.png"/>
                        </div>
                        <div className={style.serumInfo}>
                            <p className={style.serumType}>Finality</p>
                            <p>Survival Rate = 10%</p>
                            <p>Cost = 7 $BOLT</p>
                        </div>
                    </div>

                    <svg width="2" className={style.vertical} height="295" viewBox="0 0 2 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M0.00606647 147.5C-0.0464055 104.196 0.24219 61.0801 0.845618 0C1.65893 56.9199 2 102.304 2 147.5C2 192.696 1.68517 237.891 0.845618 295C0.24219 233.92 -0.0464055 190.804 0.00606647 147.5Z" fill="#66CC33"/>
                    </svg>


                    <div className={style.step2Cluster}>
                        <div className={style.serumInfo}>
                            <p className={style.serumType + " " + style.blueLight}>Cluster</p>
                            <p className={style.blue}>Survival Rate = 50%</p>
                            <p className={style.blue}>Cost = 35 $BOLT</p>
                        </div>
                        <div className={style.serumImage}>
                            <img src="/cluster.png"/>
                        </div>
                    </div>

                    <svg className={style.horizontal} width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 1.19209e-07 364 1.19209e-07C475.533 1.19209e-07 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>


                    <div className={style.step2Epoch}>
                        <div className={style.serumImage}>
                            <img src="/epoch.png"/>
                        </div>
                        <div className={style.serumInfo}>
                            <p className={style.serumType + " " + style.purpleLight}>Epoch</p>
                            <p className={style.purple}>Survival Rate = 25%</p>
                            <p className={style.purple}>Cost = 17.5 $BOLT</p>
                        </div>
                    </div>

                    <div className={style.step2Lamport}>
                        <div className={style.serumInfo}>
                            <p className={style.serumType + " " + style.greenLight}>Lamport</p>
                            <p className={style.green}>Survival Rate = 75%</p>
                            <p className={style.green}>Cost = 52.5 $BOLT</p>
                        </div>
                        <div className={style.serumImage}>
                            <img src="/lamport.png"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.step3}>
                <p>Possible Outcomes</p>

                <div className={style.outcomes}>
                    <div>
                        <div>
                            <img src="/failed.gif" className={style.failedOutcome}/>
                        </div>
                        <div className={style.outcome}>
                            <p className={style.failed}>Transformation Failure</p>
                            <p>Lose : Bolt</p>
                        </div>
                    </div>

                    <div>
                        <svg width="2" className={style.separator} height="165" viewBox="0 0 2 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.00606647 82.5C-0.0464055 58.2788 0.24219 34.1635 0.845618 0C1.65893 31.8365 2 57.2212 2 82.5C2 107.779 1.68517 133.058 0.845618 165C0.24219 130.837 -0.0464055 106.721 0.00606647 82.5Z" fill="#66CC33"/>
                        </svg>
                        <div style={{marginLeft: "80px"}} className={style.addSWrapper}>
                            <img src="/success.png" className={style.successOutcome}/>
                        </div>
                        <div className={style.outcome}>
                            <p className={style.greenLight}>Transformation Success</p>
                            <p className={style.green}>Win : 1 Summon</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default How