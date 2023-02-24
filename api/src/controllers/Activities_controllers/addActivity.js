const { Activity, Country } = require('../../db');

const addActivity = async (name, difficulty, duration, season, CountryId) => {

    try {
        const alreadyActivities = await Activity.findOne({
            where: {
                name: name,
            },
        });

        if (!alreadyActivities) {
            const activity = await Activity.create({ name, difficulty, duration, season })
            await activity.addCountry(CountryId)

            let activityWithCountry = await Activity.findOne({
                where: {
                    name: name
                },
                attributes: {
                    exclude: ['updatedAt', 'createdAt'],
                },
                include: {
                    model: Country,
                    through: {
                        attributes: []
                    }
                }
            })
            return activityWithCountry
        }
        const activityWithCountry = await alreadyActivities.addCountry(CountryId)

        return activityWithCountry

    } catch (error) {
        throw new Error("Something went wrong while creating a new Activity")
    }
}

module.exports = addActivity;