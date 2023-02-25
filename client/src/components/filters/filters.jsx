import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getCountryByName,
    getCountries,
    filterByContinent,
    sortBy,
    getCountriesByActivity,
    getActivities,
    getPages
} from "../../redux/actions";
import Style from "./filters.module.css"

const Filters = () => {
    const activities = useSelector((state) => state.allActivities)
    const dispatch = useDispatch();
    const [inputSeachByName, setInputSearchByName] = useState("");

    const inputHandler = (e) => {
        setInputSearchByName(e.target.value);
    };

    useEffect(() => {
        dispatch(getCountryByName(inputSeachByName))
    }, [dispatch, inputSeachByName])

    const homeHandler = () => {
        dispatch(getCountries());
    };

    const handlerContinent = (e) => {
        dispatch(filterByContinent(e.target.value));
        dispatch(getPages(1))
    };

    const HandlerSort = (e) => {
        dispatch(sortBy(e.target.value));
        dispatch(getPages(1))
    };

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])

    const activityHandler = (e) => {
        dispatch(getCountriesByActivity(e.target.value));
        dispatch(getPages(1))
    };

    return (
        <div className={Style.container}>

            <div className={Style.divs}>
                <input
                    name={inputSeachByName}
                    placeholder="SEARCH BY NAME"
                    type="text"
                    autoComplete="off"
                    onChange={inputHandler}
                    className={Style.input}
                >
                </input>
            </div>

            <div className={Style.divs}>
                <select className={Style.input} onChange={HandlerSort} >
                    <option value="LABEL">SORT BY</option>
                    <option value="ASC">A-Z</option>
                    <option value="DES">Z-A</option>
                    <option value="POP+">HIGHER POPULATION</option>
                    <option value="POP-">LESS POPULATION</option>
                </select>
            </div>

            <div className={Style.divs}>
                <select className={Style.input} onChange={handlerContinent}>
                    <option value="LABEL">FILTER BY CONTINENT</option>
                    <option value="All">All</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Asia">Asia</option>
                </select>
            </div>

            <div className={Style.divs}>
                <select className={Style.input} onChange={activityHandler}>
                    <option>FILTER BY ACTIVITIES</option>
                    {activities.map((act) => {
                        return (
                            <option key={act.id} vlaue={act.name}>{act.name}</option>
                        )
                    })}
                </select>
            </div>

            <div className={Style.divs}>
                <button className={Style.button} onClick={homeHandler} >
                    RESET FILTERS
                </button>
            </div>

        </div>
    )
};

export default Filters;