const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  ""
);
// Add stripe secret key above

// API

// App Configs
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-72837/us-central1/api
