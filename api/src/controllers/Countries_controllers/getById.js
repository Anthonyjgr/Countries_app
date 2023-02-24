const { Country } = require('../../db')
const { Activity } = require('../../db')


const getById = async (id) => {
    try {
        const country = await Country.findByPk(id, {
            include: {
                model: Activity,
            }
        });
        if (!country) throw new Error()

        return country

    } catch (error) {
        throw new Error(`This Country ${id} does not exist`)
    }
}




module.exports = getById;