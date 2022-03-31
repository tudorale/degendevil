import style from "../styles/Consume.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";

// future dev note: I am using just Link for consume button to go to the next page `processing`
// I'll use this state on the processing page for each button to modify the UI.

function Consume() {
  return (
    <>
        <div className={style.consumeWrapper}>
            <Head>
                <title>DegenDevil - Consume Serum</title>
            </Head>
            <Navbar />

            <div className={style.consumeGrid}>
                <div className={style.finalityConsume}>
                    <p className={style.nameConsume + " " + style.darkRed}>Finality</p>
                    <div><img src="/p1.png"/></div>
                    <p className={style.percentageConsume + " " + style.darkRed}>10%</p>
                    <p style={{marginTop: "10px"}}>Survival Rate</p>
                    <p className={style.costConsume}>Cost : 7 BOLT</p>

                    <Link href="/processing?serum=finality" passHref><p className={style.consumeButton}>Consume</p></Link>
                </div>

                <div className={style.epochConsume}>
                    <p className={style.nameConsume}>Epoch</p>
                    <div><img src="/p2.png"/></div>
                    <p className={style.percentageConsume + " " + style.purple}>25%</p>
                    <p style={{marginTop: "10px"}}>Survival Rate</p>
                    <p className={style.costConsume}>Cost : 17.5 BOLT</p>
                    
                    <Link href="/processing?serum=epoch" passHref><p className={style.consumeButton}>Consume</p></Link>
                </div>

                <div className={style.clusterConsume}>
                    <p className={style.nameConsume}>Cluster</p>
                    <div><img src="/p3.png"/></div>
                    <p className={style.percentageConsume + " " + style.blue}>50%</p>
                    <p style={{marginTop: "10px"}}>Survival Rate</p>
                    <p className={style.costConsume}>Cost : 35 BOLT</p>

                    <Link href="/processing?serum=cluster" passHref><p className={style.consumeButton}>Consume</p></Link>
                </div>

                <div className={style.lamportConsume}>
                    <p className={style.nameConsume}>Lamport</p>
                    <div><img src="/p4.png"/></div>
                    <p className={style.percentageConsume + " " + style.green}>75%</p>
                    <p style={{marginTop: "10px"}}>Survival Rate</p>
                    <p className={style.costConsume}>Cost : 52.5 BOLT</p>

                    <Link href="/processing?serum=lamport" passHref><p className={style.consumeButton}>Consume</p></Link>                </div>
            </div>
        </div>

    </>
  )
}

export default Consume