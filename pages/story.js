import style from "../styles/Home.module.css" 
import Navbar from "../components/Navbar";
import Link from "next/link"
import Head from "next/head";
function Home() {
  return (
    <>
      <div className={style.homeWrapper}>
        <Head>
            <title>DegenDevil - Story</title>
        </Head>
        <Navbar/>

        <img className={style.introFog} src="/intro-fog.png"/>

        <div className={style.introduction}>        
          <img className={style.introText} src="/home-text.png"/>
          <div>
            <p>JUNE 9, 2069</p>
            <p>The Date of the Atomic Blast</p>
            <p style={{marginTop: "50px"}}>It was becoming clear: there&apos;s no longer a way for organic life to survive</p>
            <p style={{marginTop: "17px"}}>As the Radiation spread even the Robots transformed into</p>
          </div>
          <img className={style.skullbotsLogo} src="/sk-logo.png"/>

          <svg width="110" className={style.decoration} height="110" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_260_644)">
              <path d="M13.6216 119.86C12.1876 121.296 10.3487 122.259 8.35156 122.62C8.76526 123.764 9.42787 124.803 10.2916 125.66C13.7816 129.15 19.6416 128.94 23.3816 125.2C27.1216 121.46 27.3316 115.6 23.8416 112.12C21.7616 110.04 18.8416 109.3 16.0216 109.82C17.2316 113.11 16.4116 117.07 13.6216 119.86Z" fill="#450909"/>
              <path d="M15.4187 117.254C19.1599 113.513 19.3656 107.653 15.8781 104.166C12.3907 100.678 6.53075 100.884 2.78959 104.625C-0.951568 108.367 -1.15724 114.227 2.3302 117.714C5.81764 121.201 11.6776 120.995 15.4187 117.254Z" fill="#450909"/>
              <path d="M104.162 15.87C106.242 17.95 109.162 18.69 111.982 18.17C110.772 14.89 111.592 10.92 114.382 8.13C115.816 6.69388 117.655 5.73079 119.652 5.36999C119.238 4.22557 118.575 3.18726 117.712 2.32999C114.222 -1.16001 108.372 -0.950005 104.632 2.78999C100.882 6.52999 100.682 12.39 104.162 15.87Z" fill="#450909"/>
              <path d="M125.212 23.3744C128.953 19.6331 129.159 13.7732 125.671 10.2859C122.184 6.79853 116.324 7.00441 112.583 10.7457C108.841 14.487 108.636 20.3469 112.123 23.8343C115.611 27.3216 121.471 27.1157 125.212 23.3744Z" fill="#450909"/>
              <path d="M110.153 8.39001L119.613 17.85C84.9226 50.4301 51.2627 84.09 18.6827 118.78L9.22266 109.32C43.9127 76.74 77.5727 43.08 110.153 8.39001Z" fill="#450909"/>
              <path d="M26.3125 117.78C26.3425 113.83 27.6825 109.03 32.2225 104.49L23.7325 110.32L22.3425 112.7L26.3125 117.78ZM10.2325 101.7C14.1825 101.67 18.9825 100.33 23.5225 95.79L17.6925 104.28L15.3125 105.67L10.2325 101.7ZM101.703 10.23C101.673 14.18 100.333 18.98 95.7925 23.52L104.283 17.69L105.673 15.31L101.703 10.23ZM117.783 26.31C113.833 26.34 109.033 27.68 104.493 32.22L110.323 23.73L112.703 22.34L117.783 26.31ZM8.14254 13.62C6.70642 12.186 5.74333 10.3471 5.38254 8.34998C4.23811 8.76368 3.1998 9.42628 2.34254 10.29C-1.14746 13.78 -0.937463 19.64 2.80254 23.38C6.54254 27.12 12.4025 27.33 15.8825 23.84C17.9625 21.76 18.7025 18.84 18.1825 16.02C14.8925 17.23 10.9325 16.41 8.14254 13.62Z" fill="#450909"/>
              <path d="M23.8354 15.877C27.3227 12.3895 27.1169 6.52959 23.3756 2.78843C19.6343 -0.952725 13.7743 -1.1584 10.287 2.32904C6.79969 5.81649 7.00557 11.6764 10.7469 15.4176C14.4881 19.1587 20.3481 19.3644 23.8354 15.877Z" fill="#450909"/>
              <path d="M112.132 104.16C110.052 106.24 109.312 109.16 109.832 111.98C113.112 110.77 117.082 111.59 119.872 114.38C121.308 115.814 122.271 117.653 122.632 119.65C123.777 119.236 124.815 118.574 125.672 117.71C129.162 114.22 128.952 108.37 125.212 104.63C121.472 100.88 115.612 100.68 112.132 104.16Z" fill="#450909"/>
              <path d="M117.714 125.671C121.202 122.184 120.996 116.324 117.254 112.583C113.513 108.841 107.653 108.636 104.166 112.123C100.679 115.611 100.884 121.471 104.626 125.212C108.367 128.953 114.227 129.159 117.714 125.671Z" fill="#450909"/>
              <path d="M119.613 110.15L110.153 119.61C77.5726 84.92 43.9127 51.2601 9.22266 18.68L18.6827 9.22003C51.2627 43.91 84.9227 77.57 119.613 110.15Z" fill="#450909"/>
              <path d="M10.2227 26.31C14.1727 26.34 18.9727 27.68 23.5127 32.22L17.6827 23.73L15.3027 22.34L10.2227 26.31ZM26.3027 10.23C26.3327 14.18 27.6727 18.98 32.2127 23.52L23.7227 17.69L22.3327 15.31L26.3027 10.23ZM117.773 101.7C113.823 101.67 109.023 100.33 104.483 95.79L110.313 104.28L112.693 105.67L117.773 101.7ZM101.693 117.78C101.663 113.83 100.323 109.03 95.7827 104.49L104.273 110.32L105.663 112.7L101.693 117.78Z" fill="#450909"/>
              <path d="M106 58.62C106 33.98 92.33 18.37 63.74 18.37C35.67 18.38 22 33.98 22 58.62C22 77.27 29.34 87.29 40.5 92.19C41.07 109.57 51.36 109.62 64 109.62C76.64 109.62 86.93 109.57 87.5 92.19C98.66 87.29 106 77.27 106 58.62Z" stroke="#340101" strokeWidth="5.25" strokeMiterlimit="10"/>
              <path d="M106 58.62C106 88.47 87.2 96.23 64 96.23C40.8 96.23 22 88.47 22 58.62C22 33.98 35.67 18.37 63.73 18.37C92.33 18.38 106 33.98 106 58.62Z" fill="#450909"/>
              <path d="M58.3095 60.75C57.2095 67.96 49.9995 71.78 42.6995 71.78C35.3995 71.78 31.2695 67.07 31.2695 62.24C31.2695 55.81 40.1795 48.51 47.4795 48.51C54.7795 48.51 59.2895 54.4 58.3095 60.75ZM69.6895 60.75C70.7895 67.96 77.9995 71.79 85.2995 71.79C92.5995 71.79 96.7295 67.08 96.7295 62.25C96.7295 55.82 87.8195 48.52 80.5195 48.52C73.2095 48.52 68.7095 54.4 69.6895 60.75Z" fill="#340101"/>
              <path d="M87.5492 90.7C87.5492 109.62 76.9992 109.62 63.9992 109.62C50.9992 109.62 40.4492 109.62 40.4492 90.7C40.4492 71.78 50.9892 71.78 63.9992 71.78C77.0092 71.78 87.5492 71.78 87.5492 90.7Z" fill="#450909"/>
              <path d="M63.9991 91.49C67.2907 91.49 69.9591 87.5322 69.9591 82.65C69.9591 77.7678 67.2907 73.81 63.9991 73.81C60.7074 73.81 58.0391 77.7678 58.0391 82.65C58.0391 87.5322 60.7074 91.49 63.9991 91.49Z" fill="#340101"/>
            </g>
            <defs>
            <clipPath id="clip0_260_644">
              <rect width="128" height="128" fill="white"/>
            </clipPath>
            </defs>
          </svg>

          <Link href="/serum" className={style.skip} passsHref><p style={{marginTop: "40px", cursor: "pointer"}}>Skip to the Serum</p></Link>

        </div>

        <div className={style.sectionOne}>
          <div>
            <p>In the final days the World&apos;s top scientists scrambled to salvage anything that could allow the humans to survive the radiation.</p>
            <img src="/text2.png" className={style.textTwo}/>
            <p>In the final hours Professor Lamport made a risky proposal.</p>
            <p style={{marginTop: "35px"}}>Nanobot Technology : with this he believed he could alter humanity&apos;s biochemical composition and transform them into machines.</p>
          </div>
          <div className={style.rightHand}>
            <img className={style.partTwo} src="/part2.png"/>
          </div>
        </div>

        <img className={style.fog2} src="/fog2.png"/>
        <img className={style.bg2} src="/bg2.png"/>

        <div className={style.sectionThree}>
          <p>Together with his team of 69 experts, he created a Nanobot Serum.
However, in their rush to create the Serum they were unable to achieve complete saturation.
Even when activated with the max amount of Bolt the survival rate remained fixed at 75%.</p>

          <img className={style.textThree} src="/text3.png"/>

          <p>Now all humans must drink Professor Lamport&apos;s Nanobot Serum to survive.</p>
        </div>
      </div>

      <img className={style.bg3} src="/bg3.png"/>


      <div className={style.bottomPart}>
        <div className={style.addWrapper}>
          <img className={style.textFour} src="/text4.png"/>
        </div>

        <div className={style.bottomGrid}>
          <div className={style.topPart}>
            <div className={style.finality}>
              <p className={style.name}>Finality</p>
              <div><img src="/p1.png"/></div>
              <p className={style.percentage}>10%</p>
              <p style={{marginTop: "10px"}}>Survival Rate</p>
              <p className={style.cost}>Cost : 7 BOLT</p>
            </div>

            <div className={style.epoch}>
              <p className={style.name}>Epoch</p>
              <div><img src="/p2.png"/></div>
              <p className={style.percentage}>25%</p>
              <p style={{marginTop: "10px"}}>Survival Rate</p>
              <p className={style.cost}>Cost : 17.5 BOLT</p>
            </div>

            <div className="cluster">
              <p className={style.name}>Cluster</p>
              <div><img src="/p3.png"/></div>
              <p className={style.percentage}>50%</p>
              <p style={{marginTop: "10px"}}>Survival Rate</p>
              <p className={style.cost}>Cost : 35 BOLT</p>
            </div>

            <div className="lamport">
              <p className={style.name}>Lamport</p>
              <div><img src="/p4.png"/></div>
              <p className={style.percentage}>75%</p>
              <p style={{marginTop: "10px"}}>Survival Rate</p>
              <p className={style.cost}>Cost : 52.5 BOLT</p>
            </div>
          </div>
          <Link href="/consume" passHref><div className={style.consume}><p>Consume</p></div></Link>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.footerTop}>
          <div className={style.footerLogo}>
           <Link href="/" passHref><img src="/logo.png"/></Link>
            <img src="/bar.png" />
          </div>
          <div className={style.footerLinks}>
            <Link href="/how" passHref><p>How to Play</p></Link>
            <Link href="/faqs" passHref><p>FAQs</p></Link>
            <Link href="/story" passHref><p>Story Line</p></Link>
          </div>
        </div>
        <div className={style.footerGrid}>
          <div>
            <p>!! Be Aware !!</p>
            <p>Consuming the Nanobot Serum may drain your bolt or make you filthy rich. Only those brave enough to drink the serum will gain access to Hell. Drink enough serum and rule Hell by Lucifer&apos;s side.</p>
          </div>
        </div>
        <div className={style.footerInfo}><img src="/info.png"/></div>
      </div>
    </>
  )
}

export default Home;