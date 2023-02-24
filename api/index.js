
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { saveApiData, getApiData } = require('./src/controllers/savedApiData')
//const  getById  = require('../api/src/controllers/Countries_controllers/getById.js')
//const {getApiData} = require('./src/controllers/savedApiData')

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  //console.log(await getById())
  await saveApiData()
  server.listen(3001, () => {
    console.log(' listening at 3001'); // eslint-disable-line no-console
  });
});
