
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { saveApiData } = require('./src/controllers/savedApiData');
const { PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  await saveApiData()
  server.listen(PORT, () => {
    console.log(' listening at', PORT); // eslint-disable-line no-console
  });
});
