import style from "../styles/Processing.module.css"
import {useEffect, useState} from "react";
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router'
import Head from "next/head";

// dev note: in Next JS i am using the router query to modify UI, hope this is not bothering you.

function Processing() {

    const [type, setType] = useState("");
    const [cost, setCost] = useState("");
    
    const router = useRouter();

    useEffect(() => {
        if(router.query){
            let serum = router.query.serum;
            setType(router.query.serum);
            setCost(serum == "finality" ? "7" : serum == "epoch" ? "17.5" : serum == "cluster" ? "35" : serum == "lamport" ? "52.5" : "wait")
        }
    }, [router.query])

    let styles = {
        marginTop: "10px", 
        textAlign: "center", 
        color: type == "finality" ? "#ff3737" : type == "epoch" ? "#9000d3" : type == "cluster" ? "#00cec3" : type == "lamport" ? "#007e0a" : "red",
    }

  return (
    <>
        <Head>
            <title>DegenDevil - Processing...</title>
        </Head>
        <img src="/blood4.png" className={style.processingBackground} />
        <div className={style.processingWrapper}>
            <Navbar />

            <div className={style.innerProcessing}>
                <img className={style.processingSerum} src={type == "finality" ? "/p1.png" : type == "epoch" ? "/p2.png" : type == "cluster" ? "/p3.png" : type == "lamport" ? "/p4.png" : null}/>
                <p style={styles}>consuming...</p>
            
                <p style={styles}>{type} for {cost} BOLT</p>
            
                <div className={style.externalWrapper}>
                    <img src="/animation.gif" className={style.loadingAnimation}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Processing