const { Router } = require('express');
const getAllAndQuery = require('../controllers/Countries_controllers/getAllAndQuery')
const getById = require('../controllers/Countries_controllers/getById')



const countriesRouter = Router();

countriesRouter.get("/", async (req, res) => {
    const { name } = req.query
    try {
        const allCountries = await getAllAndQuery()
        if (name) {
            res.status(200).json(allCountries.filter(el => el.name.toLowerCase().includes(name.toLowerCase())))
        } else {
            res.status(200).json(allCountries)
        }
    } catch (error) {
        return { error: error.message }
    }
})

countriesRouter.get("/:idCountry", async (req, res) => {

    const { idCountry } = req.params;

    try {
        const foundCountry = await getById(idCountry)
        res.status(200).json(foundCountry)

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})




module.exports = countriesRouter;

