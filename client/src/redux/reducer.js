import {
    GET_ACTIVITIES,
    GET_COUNTRIES,
    GET_COUNTRY_BY_NAME,
    CONTINENT_FILTER,
    ACTIVITY_FILTER,
    GET_COUNTRIES_BY_ID,
    SORT_BY_FILTER,
} from "./actionTypes";


const initialState = {
    countries: [],
    allCountries: [],
    countryDetail: [],
    allActivities: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }

        case GET_COUNTRIES_BY_ID:
            return { ...state, countryDetail: action.payload }

        case GET_COUNTRY_BY_NAME:
            return { ...state, countries: action.payload }

        case CONTINENT_FILTER:
            const allCountries = state.allCountries;
            const countriesFilteredByContinent = action.payload === "All" || action.payload === "LABEL" ? allCountries
                : allCountries.filter((country) => country.continent === action.payload)

            return {
                ...state,
                countries: countriesFilteredByContinent
            };

        case SORT_BY_FILTER:
            if (action.payload === "POP-") {
                return {
                    ...state,
                    countries: state.countries.slice().sort((a, b) => a.population - b.population)
                }

            } else if (action.payload === "POP+") {

                return {
                    ...state,
                    countries: state.countries.slice().sort((a, b) => b.population - a.population)
                }
            } else if (action.payload === "ASC") {
                const result = state.countries.slice().sort((a, b) => {
                    if (a.name < b.name) return -1
                    if (b.name < a.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: result
                }
            } else if (action.payload === "DES") {
                const result = state.countries.slice().sort((a, b) => {
                    if (a.name < b.name) return -1
                    if (b.name < a.name) return 1
                    return 0
                })
                return {
                    ...state,
                    countries: result.reverse()
                }
            } else {
                return {
                    ...state,
                    countries: state.allCountries
                }
            }
        case ACTIVITY_FILTER:
            const auxContries = state.allCountries;
            const filtered = auxContries.filter((country) =>
                country.Activities.some((activity) => activity.name === action.payload)
            )
            return {
                ...state,
                countries: filtered
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                allActivities: action.payload
            }
        default:
            return { ...state };
    }
}

export default rootReducer;