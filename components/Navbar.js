import style from "./Navbar.module.css";
import Link from "next/link"
import { useRouter } from 'next/router'


function Navbar() {

    const router = useRouter()

    let status = false;
    const handleNav = () => {
        status = !status;
        let menu = document.querySelector(".links");

        if(status) {
            menu.style.left = "0px";
        }else {
            menu.style.left = "-400px";
        }
    }

  return (
    <div className={style.navbar}>
        <img className={router.pathname !== "/story" ? style.secondClass : style.navBg} src={"/nav-bg.png"}/>
       <div className={style.navWrapper}>
           <div className={style.logoWrapper}>
            <Link href="/" passHref><img className={style.logo} src="/logo.png" /></Link>
            {
                router.pathname != "/story" ? 
                (
                    <div>
                        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3476 18.0408L20.1998 16.1956C20.1481 16.1655 20.091 16.1461 20.0319 16.1384C19.9728 16.1308 19.9128 16.135 19.8552 16.1508C19.7977 16.1667 19.7439 16.1939 19.6967 16.2309C19.6496 16.2679 19.6101 16.314 19.5805 16.3665L19.0126 17.3659C18.887 17.586 18.9612 17.8699 19.1781 17.9974L22.3259 19.8426C22.3776 19.8726 22.4347 19.892 22.4938 19.8997C22.5529 19.9074 22.6129 19.9032 22.6704 19.8873C22.7279 19.8714 22.7818 19.8442 22.829 19.8072C22.8761 19.7702 22.9156 19.7242 22.9452 19.6717L23.5131 18.6723C23.6387 18.4521 23.5616 18.1683 23.3476 18.0408ZM19.5776 6.6335C19.6072 6.686 19.6467 6.73207 19.6939 6.76907C19.741 6.80607 19.7949 6.83328 19.8524 6.84915C19.9099 6.86503 19.9699 6.86924 20.029 6.86156C20.0882 6.85389 20.1452 6.83446 20.1969 6.80441L23.3447 4.95919C23.5616 4.83174 23.6358 4.54786 23.5103 4.32771L22.9452 3.33123C22.9156 3.27873 22.8761 3.23267 22.829 3.19567C22.7818 3.15866 22.7279 3.13145 22.6704 3.11558C22.6129 3.09971 22.5529 3.09549 22.4938 3.10317C22.4347 3.11085 22.3776 3.13027 22.3259 3.16033L19.1781 5.00554C19.0739 5.06721 18.9979 5.16827 18.9669 5.28661C18.9359 5.40495 18.9523 5.53094 19.0126 5.63703L19.5776 6.6335ZM24.5434 10.4572H20.8904C20.6393 10.4572 20.4338 10.6657 20.4338 10.9207V12.0793C20.4338 12.3343 20.6393 12.5428 20.8904 12.5428H24.5434C24.7945 12.5428 25 12.3343 25 12.0793V10.9207C25 10.6657 24.7945 10.4572 24.5434 10.4572ZM15.7506 0C15.5822 0 15.411 0.0463477 15.254 0.153527L5.13699 6.86524H0.456621C0.205479 6.86524 0 7.0738 0 7.32871V15.6713C0 15.9262 0.205479 16.1348 0.456621 16.1348H5.13699L15.254 22.8465C15.411 22.9508 15.585 23 15.7506 23C16.2272 23 16.6667 22.6147 16.6667 22.0702V0.929849C16.6667 0.385265 16.2272 0 15.7506 0Z" fill="#870000"/>
                        </svg>
                        <p>Sound On</p>
                    </div>
                )
                : null
            }
           </div>

            <div className={style.links + " " + "links"}>
                <Link href="#" passHreff><p style={{cursor: "pointer"}}>Leaderboard</p></Link>
                    <a href="https://discord.com/invite/skullbots" target="_blank" rel="norefferer">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16.8465" cy="16.8465" r="16.8465" fill="#870000"/>
                            <path d="M23.0842 11.244C21.873 10.6691 20.5747 10.2441 19.217 10.0025C19.2049 10 19.1924 10.0016 19.1812 10.007C19.17 10.0123 19.1607 10.0212 19.1545 10.0325C18.9882 10.3399 18.803 10.7407 18.6732 11.0574C17.2332 10.8309 15.7693 10.8309 14.3294 11.0574C14.1848 10.7065 14.0217 10.3643 13.841 10.0325C13.8348 10.0211 13.8256 10.012 13.8144 10.0063C13.8032 10.0007 13.7907 9.99875 13.7784 10.0008C12.4216 10.2424 11.1233 10.6674 9.91125 11.2432C9.90083 11.2478 9.89199 11.2557 9.88592 11.2657C7.42233 15.078 6.74705 18.796 7.07875 22.4675C7.07968 22.4765 7.08233 22.4852 7.08655 22.493C7.09077 22.5009 7.09646 22.5078 7.10329 22.5133C8.54123 23.6153 10.1451 24.4547 11.8476 24.9965C11.8595 25.0003 11.8722 25.0003 11.884 24.9964C11.8959 24.9926 11.9064 24.985 11.9141 24.9748C12.2799 24.4582 12.606 23.9124 12.8847 23.3391C12.9013 23.3058 12.8855 23.2658 12.8522 23.2524C12.3408 23.0497 11.8453 22.8051 11.3703 22.5208C11.3617 22.5157 11.3545 22.5084 11.3493 22.4996C11.3441 22.4908 11.3411 22.4808 11.3404 22.4705C11.3398 22.4602 11.3416 22.4499 11.3457 22.4405C11.3498 22.4311 11.3561 22.4229 11.3639 22.4166C11.4637 22.3391 11.5634 22.2583 11.6584 22.1775C11.667 22.1702 11.6773 22.1656 11.6882 22.1641C11.6991 22.1627 11.7101 22.1644 11.7202 22.1692C14.8289 23.6391 18.1958 23.6391 21.2682 22.1692C21.2782 22.1641 21.2894 22.1621 21.3005 22.1635C21.3115 22.1648 21.322 22.1694 21.3307 22.1767C21.4257 22.2583 21.5247 22.3391 21.6252 22.4166C21.6331 22.4227 21.6395 22.4308 21.6437 22.4401C21.6479 22.4495 21.6499 22.4597 21.6494 22.4701C21.649 22.4804 21.6461 22.4904 21.641 22.4993C21.636 22.5081 21.6289 22.5155 21.6205 22.5208C21.1471 22.8075 20.6547 23.0499 20.1377 23.2516C20.1298 23.2546 20.1225 23.2594 20.1165 23.2656C20.1104 23.2718 20.1057 23.2793 20.1027 23.2876C20.0996 23.2959 20.0982 23.3048 20.0987 23.3136C20.0991 23.3225 20.1014 23.3312 20.1053 23.3391C20.3902 23.9115 20.7164 24.4565 21.075 24.974C21.0825 24.9846 21.0929 24.9925 21.1048 24.9967C21.1167 25.0009 21.1295 25.0011 21.1415 24.9973C22.847 24.457 24.4534 23.6172 25.893 22.5133C25.9 22.5081 25.9059 22.5014 25.9102 22.4937C25.9146 22.4859 25.9174 22.4773 25.9183 22.4683C26.3141 18.2236 25.2549 14.5355 23.1087 11.2674C23.1035 11.2568 23.0948 11.2485 23.0842 11.244ZM13.3494 20.2318C12.4136 20.2318 11.6418 19.341 11.6418 18.2486C11.6418 17.1553 12.3986 16.2654 13.3494 16.2654C14.3073 16.2654 15.072 17.1628 15.0569 18.2486C15.0569 19.3418 14.3001 20.2318 13.3494 20.2318ZM19.6627 20.2318C18.7262 20.2318 17.9551 19.341 17.9551 18.2486C17.9551 17.1553 18.7112 16.2654 19.6627 16.2654C20.6206 16.2654 21.3853 17.1628 21.3703 18.2486C21.3703 19.3418 20.6214 20.2318 19.6627 20.2318Z" fill="#090000"/>
                        </svg>
                    </a>
                <a href="https://twitter.com/SKULLBOTS" target="_blank" rel="norefferer">
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="17.1512" cy="16.8465" r="16.8465" fill="#870000"/>
                        <path d="M27 12.7793C26.3381 13.0799 25.627 13.2831 24.8794 13.3749C25.6508 12.9018 26.2278 12.1572 26.503 11.28C25.7783 11.7212 24.9851 12.0318 24.158 12.1982C23.6018 11.5895 22.8651 11.186 22.0623 11.0504C21.2594 10.9148 20.4354 11.0547 19.7181 11.4484C19.0007 11.8421 18.4303 12.4675 18.0953 13.2276C17.7602 13.9877 17.6794 14.8399 17.8652 15.6519C16.3968 15.5764 14.9603 15.1851 13.649 14.5036C12.3376 13.8221 11.1807 12.8655 10.2533 11.696C9.93623 12.2568 9.7539 12.9069 9.7539 13.5992C9.75354 14.2225 9.90328 14.8362 10.1898 15.386C10.4763 15.9357 10.8908 16.4045 11.3965 16.7506C10.81 16.7315 10.2366 16.5691 9.72377 16.2768V16.3256C9.72371 17.1998 10.0187 18.0471 10.5587 18.7237C11.0987 19.4003 11.8504 19.8646 12.6863 20.0377C12.1423 20.1886 11.5719 20.2109 11.0183 20.1027C11.2542 20.8549 11.7136 21.5127 12.3322 21.9839C12.9508 22.4551 13.6977 22.7163 14.4683 22.7308C13.1602 23.7835 11.5446 24.3545 9.88153 24.352C9.58693 24.3521 9.29258 24.3344 9 24.2992C10.6881 25.4118 12.6532 26.0023 14.6602 26C21.454 26 25.168 20.2319 25.168 15.2294C25.168 15.0668 25.164 14.9027 25.1569 14.7402C25.8793 14.2046 26.5029 13.5414 26.9984 12.7817L27 12.7793Z" fill="#090000"/>
                    </svg>
                </a>
            </div>

            <div className={style.hamburger} onClick={() => handleNav()}>
                <div className={style.line}></div>
                <div className={style.line}></div>
                <div className={style.line}></div>
            </div>
       </div>
    </div>
  )
}

export default Navbar