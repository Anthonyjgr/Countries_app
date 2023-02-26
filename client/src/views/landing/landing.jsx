import linkedin_black from "../../assets/linkedin_black.png"
import instagram_black from "../../assets/instagram_black.png"
import github_black from "../../assets/github_black.png"
import Style from "./landing.module.css"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div className={Style.container}>
            <div className={Style.ContainercentralBox}>
                <div className={Style.leftBox}>
                    <div className={Style.txtContainer}>
                        <p className={Style.txt}>LEARN MORE ABOUT COUNTRIES AND SHARING YOUR EXPERIENCES TO OTHER PEOPLE.</p>
                    </div>
                </div>
                <div className={Style.rightBox}>
                    <div className={Style.containerButton}>
                        <Link to="/home">
                            <button className={Style.button}>LET'S GO STARTED</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={Style.lines1}></div>

            <div className={Style.iconsContainer}>
                <a
                    href="https://www.linkedin.com/in/anthony-guzman-840449135/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className={Style.png} src={linkedin_black} alt="linkedin" />
                </a>
                <a
                    href="https://www.instagram.com/antho.guitar/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className={Style.png} src={instagram_black} alt="instagram" />
                </a>
                <a
                    href="https://github.com/Anthonyjgr"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className={Style.png} src={github_black} alt="github" />
                </a>
            </div>
            <div className={Style.lines}></div>
        </div >
    )
};

export default Landing;