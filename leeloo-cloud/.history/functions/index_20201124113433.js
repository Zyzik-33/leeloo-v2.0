const functions = require("firebase-functions");
require("dotenv").config();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send(process.env.SG_API_KEY);
});
