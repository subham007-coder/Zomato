const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require('express-session');
const MongoStore = require('connect-mongo');
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

app.use(session({
  secret: 'yourSecretKey', // Replace with a secure secret key
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: MONGO_URL,
    touchAfter: 24 * 3600 // time period in seconds
  })
}));

// Middleware to initialize cart in session
app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = { items: [], totalPrice: 0 };
  }
  next();
});

// home route
app.get("/", async (req, res) => {
  const allListings = await Listing.find({});
  const cart = req.session.cart; // Retrieve cart from session
  res.render("./listings/index.ejs", { allListings, cart });
});

// index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  const cart = req.session.cart; // Retrieve cart from session
  res.render("./listings/index.ejs", { allListings, cart });
});


// show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  const cart = req.session.cart;
  res.render("./listings/show.ejs", { listing, cart });
});

// search route
app.get("/title/:title", async (req, res) => {
  const regex = new RegExp(`^${req.params.title}`, "i");
  const allTitle = await Listing.find({ title: regex });
  res.json(allTitle);
});

// add to cart route
app.post("/listings/:id/cart", async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  const cart = req.session.cart;

  const itemIndex = cart.items.findIndex(item => item.listingId.toString() === id);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += 1;
  } else {
    cart.items.push({
      listingId: id,
      title: listing.title, 
      price: listing.price, 
      image: listing.image, // Store the image URL
      quantity: 1
    });
  }

  cart.totalPrice += listing.price;
  req.session.cart = cart;

  res.redirect(`/listings/${id}`);
});

// remove item from cart route
app.post("/cart/remove", (req, res) => {
  const { listingId } = req.body;
  const cart = req.session.cart;
  
  const itemIndex = cart.items.findIndex(item => item.listingId.toString() === listingId);

  if (itemIndex > -1) {
    cart.totalPrice -= cart.items[itemIndex].price * cart.items[itemIndex].quantity;
    cart.items.splice(itemIndex, 1);
    req.session.cart = cart;
  }

  res.redirect('back');
});

app.listen(8080, () => {
  console.log("server is start on");
  console.log("http://localhost:8080/");
});
