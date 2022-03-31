import style from "../styles/Faq.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

function Faq() {
  return (
    <div className={style.faqWrapper}>
        <Navbar />
        <Head>
            <title>DegenDevil - FAQs</title>
        </Head>
        
        <div className={style.innerFaq}>
            <p className={style.faqTitle}>FAQs</p>

            <div className={style.faqs}>
                <div>
                    <p className={style.question}>
                     What is DegenDevil?
                    </p>

                    <p className={style.answer}>
                    DegenDevil is a probability game controlled by a smart contract that allows players to place wagers for different win multipliers and odds.
                    </p>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        What are the available bets?
                    </p>

                    <p className={style.answer}>Our bet table is as follows:</p>

                    <div style={{marginTop: "15px"}}>
                        <p>7 Bolt: 10% Win Rate</p>
                        <p style={{marginTop: "10px"}}>17.5 Bolt: 25% Win Rate</p>
                        <p style={{marginTop: "10px"}}>35 Bolt: 50% Win Rate</p>
                        <p style={{marginTop: "10px"}}>52.5 Bolt: 75% Win Rate</p>
                    </div>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        What will I win?
                    </p>

                    <p className={style.answer}>
                        Currently, we offer bets in $BOLT. Each win will reward 1 $SUMMON.
                    </p>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        Where can I buy Bolt?
                    </p>

                    <p className={style.answer}>
                        <a target="_blank" rel="noreferrer" style={{wordBreak: "break-all"}} href="https://v1.raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=4xDPH7DVtDXA2eU6wp9BjhryfXEdxBuhe4hnEc9yz1pJ">
                            https://v1.raydium.io/swap/?from=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&to=4xDPH7DVtDXA2eU6wp9BjhryfXEdxBuhe4hnEc9yz1pJ
                        </a>
                    </p>
                    

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                </div>

                <div>
                    <p className={style.question}>
                        Is there a House Edge?
                    </p>

                    <p className={style.answer}>
                    No, all bets are true odds. We only collect a small fee in Solana for each bet.
                    </p>
                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>
                </div>

                <div>
                    <p className={style.question}>
                    Can I bet in Solana?
                    </p>

                    <p className={style.answer}>
                    Not yet, we are currently in Beta. We will be offering bets placed in Solana soon.
                    </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq