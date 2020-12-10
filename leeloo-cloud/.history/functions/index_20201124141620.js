const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

exports.sendEmail = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  sgMail.setApiKey(process.env.SG_API_KEY);
  const msg = {
    to: "leeloo.data@gmail.com",
    from: request.body.email, // Change to your verified sender
    subject: `New message from ${request.body.name}`,
    text: request.body.message,
  };
  sgMail.send(msg());
  // .then(() => {
  //   console.log('Email sent')
  // })
  // .catch((error) => {
  //   console.error(error)
  // })
});
