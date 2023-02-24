const { Router } = require('express');
const getAll = require('../controllers/Activities_controllers/getAll')
const addActivity = require('../controllers/Activities_controllers/addActivity')


const activitiesRouter = Router();

activitiesRouter.get("/", async (req, res) => {
    const allActivities = await getAll()
    try {
        res.status(200).json(allActivities)
    } catch (error) {
        return { error: error.message }
    }
})

activitiesRouter.post("/", async (req, res) => {
    try {
        const { name, difficulty, duration, season, CountryId } = req.body
        const newActivity = await addActivity(name, difficulty, duration, season, CountryId)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})


module.exports = activitiesRouter;