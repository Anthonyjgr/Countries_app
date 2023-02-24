import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import Style from "./cardsContainer.module.css"
import { getCountries } from "../../redux/actions";
import Paginated from "../paginated/paginated";


const CardsContainer = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries)

    const [currentePage, setCurrentePage] = useState(1)
    const [countriesPerPage] = useState(10)
    const indexOfLastCountry = currentePage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paginated = (pageNumber) => {
        setCurrentePage(pageNumber)
    }

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch])

    return (
        <div className={Style.main}>
            <div className={Style.paginated}>
            <Paginated
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginated={paginated}
            />
            </div>
            <div className={Style.container}>
                {currentCountry.map(country => {
                    return <Card
                        key={country.id}
                        flagImage={country.flagImage}
                        name={country.name}
                        continent={country.continent}
                        id={country.id}
                    />
                })}
            </div>
        </div>
    )
};

export default CardsContainer;