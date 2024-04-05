const express = require("express");
const app = express();
const methodOverride = require('method-override')
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const Cart = require("./models/cart.js");

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

// set the view engine to ejs middleware
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

// home route
app.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

// index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("./listings/index.ejs", { allListings });
});

//show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

// search route
app.get("/title/:title", async (req, res) => {
  const regex = new RegExp(`^${req.params.title}`, "i");
  const allTitle = await Listing.find({ title: regex });
  res.json(allTitle);
});

// add to cart
app.post("/listings/:id/cart", async (req, res) => {
  let listing = await Listing.findById(req.params.id);
  let newCart = new Cart(req.body.cart);

  listing.cart.push(newCart);

  await newCart.save();
  await listing.save();

  console.log("new cart save");
});

app.listen(8080, () => {
  console.log("server is start on");
  console.log("http://localhost:8080/");
});