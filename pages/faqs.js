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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <p className={style.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <p className={style.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <p className={style.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <svg width="728" height="2" viewBox="0 0 728 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M364 1.99393C257.133 2.04641 150.733 1.75781 0 1.15438C140.467 0.341066 252.467 8.45519e-08 364 8.45519e-08C475.533 8.45519e-08 587.067 0.31483 728 1.15438C577.267 1.75781 470.867 2.04641 364 1.99393Z" fill="#66CC33"/>
                    </svg>

                </div>

                <div>
                    <p className={style.question}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>

                    <p className={style.answer}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo sapien, in ultrices velit auctor nec.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faq