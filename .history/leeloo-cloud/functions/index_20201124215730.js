const functions = require('firebase-functions');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const cors = require('cors')({ origin: true });


  exports.sendEmail = functions.https.onRequest((request, response) => {
     sgMail.setApiKey(process.env.SG_API_KEY)
     console.log(request.body)
     const msg = {
       to: 'leeloo.data@gmail.com', 
       from: request.body.email,
       subject: `New message from ${request.body.name}`,
       text: request.body.message,
     }

     cors(request, response, () => {
       sgMail
       .send(msg, (err, res) => {
         if (err) {
           response.send(500);
         } else {
           response.send(res);
         }
       });
     })
 });

