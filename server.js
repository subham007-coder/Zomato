const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/Zomato";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

app.listen(8080, () => {
  console.log("server is start on");
  console.log("http://localhost:8080/");
});
