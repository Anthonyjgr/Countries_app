const { Activity, Country } = require('../../db')

const getAll = async () => {
    try {
        const allActivities = await Activity.findAll({ include: Country })
        return allActivities

    } catch (error) {
        throw new Error({ error: error.message })
    }
}
module.exports = getAll; 