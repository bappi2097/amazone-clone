const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPvW2EnJe5O33eJme0wsrZ8Ky7Dt2hU6GjtsxAgaEZzshNdkULVQTZXhTfkxNnmae7CCoIWQHnjaINyyK6KGJgV00MoE1VKD4"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// APT routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request receive!!! for this amount >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-e8ee0/us-central1/api
