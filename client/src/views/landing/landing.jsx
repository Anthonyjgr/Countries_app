import linkedin_black from "../../assets/linkedin_black.png"
import instagram_black from "../../assets/instagram_black.png"
import github_black from "../../assets/github_black.png"
import Style from "./landing.module.css"
import { Link } from "react-router-dom"


const Landing = () => {
    return (
        <div className={Style.container}>

            {/* <img className={style.background} src={travel_sales} alt="background_image" /> */}

            <div className={Style.centralBox}>
                <div className={Style.txtContainer}>
                <p className={Style.txt1}>DO YOU</p>
                <p className={Style.txt2}>like</p>
                <p className={Style.txt1}>GEOGRAPHY</p>
                <p className={Style.txt2}>and</p>
                <p className={Style.txt1}>TOURISM?</p>
                </div>
               
                <div className={Style.buttonContainer}>
                    <Link to="/home">
                        <button className={Style.button}><div className={Style.yes}><p>!YES!</p></div></button>
                    </Link>
                </div>
            </div>
            <div className={Style.separador}></div>
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
        </div >
    )
};

export default Landing;