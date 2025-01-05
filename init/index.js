// using this file we can re-create sample data in our database.

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

// connection.
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wander");
}

const initDB = async () => { 
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner:"675ed28e4ddca18ae487b84f"}));
    await Listing.insertMany(initData.data);
    console.log("data was saved!");
};

initDB();