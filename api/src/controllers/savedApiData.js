const axios = require('axios')
const { Country } = require('../db')

const getApiData = async () => {
    try {
        let countries = []
        const apiData = await axios('https://restcountries.com/v3/all');
        countries.push(apiData.data)
        let finalData = [];

        countries = countries.map(el => el.map(country => {
            finalData.push({
                id: country.cca3,
                name: country.name.common,
                flagImage: country.flags[0],
                continent: country.region,
                capital: country.capital ? country.capital[0] : '',
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                location: country.maps.googleMaps
            })
        }))
        return finalData

    } catch (error) {
        return { error: error.message }
    }
}

const saveApiData = async () => {
    try {
        const countries = await getApiData();
        await Country.bulkCreate(countries);
        return countries

    } catch (error) {
        return { error: error.message }
    }
}

module.exports = {
    saveApiData,
    getApiData
}


