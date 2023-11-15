const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OA6XESBqzsRg5V3LVLbRtWbjuQxPShRmm48hJh1Qv05TbiFmiVfzkFjrre04kCizI2t7GN0rTfkjIf4tSSQ9nMC00kYHWdpAF"
);

// -app config
const app = express();
app.use(express());
app.use(cors({ origin: true })); // Add this line to enable CORS

// ...

// - api routes
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/Payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// ...

// listen command
// exports.api = functions.https.onRequest(app);
const PORT = 5001;
app.listen(PORT, () => {
  console.log("Port is listining on " + PORT);
});