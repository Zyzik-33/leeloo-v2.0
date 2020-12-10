const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  sgMail.setApiKey(process.env.SG_API_KEY);
  const msg = {
    to: "test@example.com", // Change to your recipient
    from: "test@example.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
});
