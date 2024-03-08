const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listings.js");

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

app.get("/", (req, res) => {
  res.send("hii day1");
});


// sampale data
// app.get("/test", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "biriyani",
//     description: "North Indian",
//     price: 200,
//   });
//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("testing was done");
// });



app.listen(8080, () => {
  console.log("server is start on");
  console.log("http://localhost:8080/");
});
