import Style from "./about.module.css"
import css from "../../assets/technologies_icons/css.png"
import express from "../../assets/technologies_icons/Express.png"
import html from "../../assets/technologies_icons/html.png"
import JS from "../../assets/technologies_icons/JS.png"
import node from "../../assets/technologies_icons/Node.png"
import postgres from "../../assets/technologies_icons/Postgres.png"
import react from "../../assets/technologies_icons/React.png"
import redux from "../../assets/technologies_icons/redux.png"
import sequalize from "../../assets/technologies_icons/Sequelize.png"
import Anthony from "../../assets/technologies_icons/AnthonyG.png"
import Footer from "../../components/footer/footer"

export const About = () => {
    return (

        <div className={Style.mainContainer}>
            <div className={Style.upContainer1}>
                <div className={Style.photoContainer}>
                    <img className={Style.photo} src={Anthony} alt="Anthony" />
                    <div className={Style.boxForm}></div>
                </div>
            </div>
            <div className={Style.upContainer2}>
                <div className={Style.upLeft}>
                    <div className={Style.contentUpLeft}>
                        <h1 className={Style.title}>A little bit about us</h1>
                        <span className={Style.txtLeft}>
                            Hello my name is Anthony Guzmán and I am going to tell you about the Countries application that I have developed.
                            The Countries application is a graduation project of my training process as a full stack software developer.
                        </span>
                        <br />
                        <span className={Style.txtLeft}>
                            Countries, is an app, which is built based on React components. The displayed information comes from public REST API and use only the following endpoint to filter the displayed information in the app <a href="https://restcountries.com/v3.1/all">https://restcountries.com/v3.1/all</a> The information used from the API was taken to a Postgres database for later use with direct calls to the database.
                        </span>
                    </div>
                </div>
            </div>
            <div className={Style.downContainer1}>
                <div className={Style.downLeft}>
                    <div className={Style.contentDownLeft}>
                        <h1 className={Style.txtLeftDown}>Technologies used in this App</h1>
                        <div className={Style.iconsContainer}>

                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={css} alt="css" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={express} alt="express" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={html} alt="html" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={JS} alt="JS" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={node} alt="node" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={react} alt="react" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={postgres} alt="postgres" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.icons} src={redux} alt="redux" />
                            </div>
                            <div className={Style.iconDiv}>
                                <img className={Style.iconDivSeq} src={sequalize} alt="sequalize" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.downContainer2}>
                <div className={Style.downRight}>
                    <div className={Style.contentDownRight}>
                        <h1 className={Style.titleDownRight}>Functionalities</h1>
                        <ul className={Style.txtDownRight}>
                            <li>A navbar with the path HOME and ADD ACTIVITY.</li>
                            <li>Start with a minimalist landing page according to the design concept of the app.</li>
                            <li>Filter by name, by activity, in ascending and descending order and by alphabetical order.</li>
                            <li>It has an adaptive pagination according to the response of each filter.</li>
                            <li>Print 10 cards per page, depending on the results.</li>
                            <li>It has a controlled form where new activities can be added to the database and related to the selected countries.</li>
                            <li>A footer with my social media links.</li>
                            <li>The About component, with all the detailed information of the application.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={Style.footer}>
                <Footer></Footer>
            </div>
        </div >
    )
}