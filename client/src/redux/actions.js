import {
    GET_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    CONTINENT_FILTER,
    ACTIVITY_FILTER,
    GET_COUNTRIES_BY_ID,
    SORT_BY_FILTER,
    GET_ACTIVITIES,
    PAGINATED
} from "./actionTypes";
import axios from "axios"

export const getCountries = () => {
    return async function (dispatch) {
        const dbData = await axios.get("/countries");
        const countries = dbData.data
        dispatch({ type: GET_COUNTRIES, payload: countries });
    };
};

export const getActivities = () => {
    return async function (dispatch) {
        const dbData = await axios.get("/activities");
        const activities = dbData.data
        dispatch({ type: GET_ACTIVITIES, payload: activities });
    };
};

export const postActivities = (activity) => {
    return async function () {
        try {
            const newAct = await axios.post(
                "/activities",
                activity
            );
            return newAct
        } catch (error) {
        }
    }
}

export const getCountriesById = (id) => {
    return async function (dispatch) {
        try {
            const dbData = await axios.get(`/countries/${id}`);
            const foundCountry = dbData.data;

            dispatch({ type: GET_COUNTRIES_BY_ID, payload: foundCountry });
        } catch (error) {
            console.log(error)
        }
    };
};

export const getCountryByName = (name) => {
    return async function (dispatch) {
        try {
            const dbData = await axios.get(`/countries?name=${name}`);
            const foundCountry = dbData.data;

            dispatch({ type: GET_COUNTRY_BY_NAME, payload: foundCountry });
        } catch (error) {
            console.log(error);
        }
    };
}

export const filterByContinent = (payload) => {
    return {
        type: CONTINENT_FILTER,
        payload
    }
}

export const sortBy = (payload) => {
    return {
        type: SORT_BY_FILTER,
        payload
    }
}

export const getCountriesByActivity = (payload) => {
    return {
        type: ACTIVITY_FILTER,
        payload
    }
}

export  const getPages = (payload) => {
    return {
        type: PAGINATED,
        payload
    }
}

