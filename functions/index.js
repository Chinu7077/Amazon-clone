const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51LaTysSJ1UhM3IDCCiN3NGCAxAoBTQYLBaJ7EabOykJZuAZJdv8iCNHOhWrwFug0CQ9XYcMeeChKvMuR5o8osget00JpmUp9fC"
);
// API

// App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(201).send("HELLO CHINU"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recived Boom !!! for this anount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen Command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/fir-52e63/us-central1/api
