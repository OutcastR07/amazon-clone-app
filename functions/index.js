const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51MRqWLGukv3xB98hP62H0IH7TtM2QUT869DRVWbWzDNA0Kglp9X6dxo2uMeBb0d9I1Hc8E2N02hCmLmsABfkrcvU00gUHinbPF");

// API

// -App config

const app = express();

// -Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// -API routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>>", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

// - Listen command

exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/personal-ecommerce-website/us-central1/api