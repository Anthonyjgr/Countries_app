import Style from "./footer.module.css"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"

const Footer = () => {
    return (
        <div className={Style.container}>
            <div className={Style.socialMediaLogo}>
                <div >
                    <a
                        href="https://www.linkedin.com/in/anthony-guzman-840449135/"
                        target="_blank"
                        rel="noreferrer"
                    >
                    
                        <img className={Style.img} src={linkedin} alt="linkedin logo"></img>
                    </a>
                </div>
                <div>
                    <a
                        href="https://github.com/Anthonyjgr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className={Style.img} src={github} alt="github logo"></img>
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.instagram.com/antho.guitar/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img className={Style.img} src={instagram} alt="instagram logo"></img>
                    </a>
                </div>
            </div>
            <p>©2023 Anthony Guzmán. All Rights Reserved.</p>
        </div>
    )
};

export default Footer;