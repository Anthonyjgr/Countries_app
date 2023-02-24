import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getCountriesById } from "../../redux/actions"
import { useParams } from "react-router-dom";
import Style from "./detail.module.css"
import activity from "../../assets/activity.png"
import area from "../../assets/area.png"
import capital from "../../assets/capital.png"
import continent from "../../assets/continent.png"
import difficulty from "../../assets/difficulty.png"
import duration from "../../assets/duration.png"
import identification from "../../assets/id.png"
import population from "../../assets/population.png"
import season from "../../assets/season.png"
import subregion from "../../assets/subregion.png"

const Detail = () => {

    const countryDeatail = useSelector((state) => state.countryDetail);
    const dispatch = useDispatch();

    const { id } = useParams()

    useEffect(() => {
        dispatch(getCountriesById(id))
    }, [dispatch, id])
    return (
        <div className={Style.container}>

            <div className={Style.boxesFlag}>
                <img className={Style.flag} src={countryDeatail.flagImage} alt={`${countryDeatail.name} flag`}></img>
            </div>

            <div className={Style.boxesDetail}>
                <div className={Style.name}>
                    <img className={Style.nameBackground} src={countryDeatail.flagImage} alt={countryDeatail.name}></img>
                    <h1>{countryDeatail.name}</h1>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img className={Style.insideRightBoxesImgages} src={capital} alt={countryDeatail.capital}></img>
                        <h1>Capital : {countryDeatail.capital}</h1>
                    </div>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img className={Style.insideRightBoxesImgages} src={continent} alt={countryDeatail.continent}></img>
                        <h1>Continent : {countryDeatail.continent}</h1>
                    </div>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img  className={Style.insideRightBoxesImgages} src={identification} alt={countryDeatail.id}></img>
                        <h1>ID : {countryDeatail.id}</h1>
                    </div>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img className={Style.insideRightBoxesImgages} src={area} alt={countryDeatail.area}></img>
                        <h1>Area : {countryDeatail.area} km²</h1>
                    </div>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img className={Style.insideRightBoxesImgages} src={subregion} alt={countryDeatail.subregion}></img>
                        {countryDeatail.subregion && <h1>Subregion : {countryDeatail.subregion}</h1>}
                    </div>
                </div>

                <div className={Style.rightTwoBoxes}>
                    <div className={Style.insideRightBoxes}>
                        <img className={Style.insideRightBoxesImgages} src={population} alt={countryDeatail.population}></img>
                        {countryDeatail.population && <h1>Population : {(countryDeatail.population).toLocaleString('en').replace(/,/g, ".",)}</h1>}
                    </div>
                </div>
            </div>
            <div className={Style.activities}>
                {countryDeatail.Activities && countryDeatail.Activities.map((a) => {
                    return (
                        <div className={Style.actCards} key={a.id}>
                            <div className={Style.cardsDivs}>
                                <img alt ="activity_icon" src={activity}></img>
                                <h1 className={Style.cardsText}>Activity: {a.name}</h1>
                            </div>
                            <div className={Style.cardsDivs}>
                                <img alt ="difficulty_icon"  src={difficulty}></img>
                                <h1 className={Style.cardsText}>Difficultu: {a.difficulty}/5</h1>
                            </div>
                            <div className={Style.cardsDivs}>
                                <img alt ="duration_icon" src={duration}></img>
                                <h1 className={Style.cardsText}>Duration: it takes {a.duration} hours</h1>
                            </div>
                            <div className={Style.cardsDivs}>
                                <img alt ="season_icon" src={season}></img>
                                <h1 className={Style.cardsText}>Season: {a.season}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Detail;
