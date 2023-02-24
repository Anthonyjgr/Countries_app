import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivities } from "../../redux/actions";
import Style from "./addActivity.module.css"



const AddActivity = () => {

    const countries = useSelector(state => state.countries).sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const [form, setForm] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        CountryId: [],
        season: "",
    })

    const [error, setError] = useState({})

    const deleteFlagHandler = (id) => {
        const filteredCountries = form.CountryId.filter(c => c !== id)
        setForm({ ...form, CountryId: filteredCountries })
        setNames(names.filter(c => c.id !== id))
    }

    const changeInputHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value

        setForm({ ...form, [property]: value })
        validator({ ...form, [property]: value })
    }

    const [names, setNames] = useState([])

    const selectCountryHandler = (event) => {
        const countryMatch = countries.find(item => item.id === event);
        setNames([...names, countryMatch]);

        setForm({
            ...form,
            CountryId: [...form.CountryId, event]
        })
        validator({
            ...form,
            CountryId: [...form.CountryId, event]
        })

    }

    const selectDifficultyHandler = (event) => {
        setForm({
            ...form,
            difficulty: Number(event.target.value)
        })
        validator({
            ...form,
            difficulty: Number(event.target.value)
        })
    }

    const selectDurationHandler = (event) => {
        setForm({
            ...form,
            duration: Number(event.target.value)
        })
        validator({
            ...form,
            duration: Number(event.target.value)
        })
    }

    const selectSeasonHandler = (event) => {
        setForm({
            ...form,
            season: event.target.value
        })
        validator({
            ...form,
            season: event.target.value
        })
    }

    const handlerSubmit = (e) => {
       // e.preventDefault();
        dispatch(postActivities(form))
        alert(`You have been created the new activity ${form.name}`)
        setForm({
            name: "",
            difficulty: null,
            duration: null,
            CountryId: [],
            season: "",
        })
    }

    const durationSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    const difficultySelect = [1, 2, 3, 4, 5]


    useEffect(() => {
        setError(validator(form))
    }, [form])

    const validator = (form) => {
        let errors = {}
        if (!form.name) {
            errors.name = 'Name is required'
        } else if (!/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(form.name)) {
            errors.name = 'Name is invalid'
        }
        if (!form.duration || form.duration < 1) {
            errors.duration = 'Duration is required'
        }
        if (!form.difficulty) {
            errors.difficulty = 'Difficulty is required'
        }
        if (!form.season) {
            errors.season = 'You must select one season'
        }
        if (!form.CountryId.length) {
            errors.CountryId = 'You must select at least one country'
        }
        return errors
    }


    const filteredCountriesForMap = countries.filter((country) => !form.CountryId.includes(country.id))

   

    return (

        <form className={Style.container} onSubmit={handlerSubmit}>
            <div>
                <div className={Style.header}>
                   <span>CREATE ACTIVITY</span> 
                </div>
                <div >
                    <span className={Style.inputs}>ACTIVITY NAME</span>
                    <input
                        placeholder={error.name && "NAME IS REQUIRED"} type="text" value={form.name} onChange={changeInputHandler} name="name"
                        autoComplete="off"
                        className={Style.box}>
                    </input>
                </div>
                <span className={Style.inputs}>DIFFICULTY</span>
                <div>
                    <select className={Style.box} onChange={selectDifficultyHandler}>
                        <option value="" hidden>{error.difficulty && "DIFFICULTY IS REQUIRED" }</option>
                        {difficultySelect.map(item => <option key={item} name="difficulty" value={item}>{item}</option>)}
                    </select>
                </div>
                <span className={Style.inputs}>DURATION</span>
                <div>
                    <select className={Style.box} onChange={selectDurationHandler}>
                        <option value="" hidden>{error.duration && "DURATION IS REQUIRED"}</option>
                        {durationSelect.map(item => <option key={item} name="duration" value={item}>{item}</option>)}
                    </select>
                </div>
                <span className={Style.inputs}>COUNTRY</span>
                <div>
                    <select className={Style.box} onChange={(e) => selectCountryHandler(e.target.value)}>
                        <option value="" hidden>{error.CountryId && "COUNTRY IS REQUIRED"}</option>
                        {filteredCountriesForMap?.map(item => <option key={item.id} value={item.id}>{item.name.toUpperCase()}</option>)}
                    </select>
                </div>
                <span className={Style.inputs}>SEASON</span>
                <div>
                    <select className={Style.box} onChange={selectSeasonHandler}>
                        <option value="" hidden>{error.season && "SEASON IS REQUIRED"}</option>
                        <option name="SUMMER" value="SUMMER">SUMMER</option>
                        <option name="FALL" value="FALL">FALL</option>
                        <option name="WINTER" value="WINTER">WINTER</option>
                        <option name="SPRING" value="SPRING">SPRING</option>
                    </select>
                </div>
                <div className={Style.buttonContainer}>
                    {Object.entries(error).length === 0 && <button className={Style.button} type="submit" >
                        ADD ACTIVITY
                    </button>}
                </div>
            </div>
            <div className={Style.countriesFlags}>
                {
                    names.map(country =>
                        <div key={country.id}>
                            <button  className={Style.deleteButton} onClick={() => deleteFlagHandler(country.id)}>x</button>
                            <img className={Style.flags} src={country.flagImage} alt={country.name}>
                            </img>
                        </div>
                    )
                }
            </div>
        </form>
    )

};

export default AddActivity;

