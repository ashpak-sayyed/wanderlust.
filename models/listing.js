//this file is represented by listing schema. using this file we can create listing schema.
const mongoose = require("mongoose");
// in this file review because we can create review inside listing.
const Review = require("./review.js");

// create schema
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    url : String,
    filename :String
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  country: {
    type: String,
  },

  // This is only for storing review sending from Review Model.
  reviews : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Review",
    },
  ],
  owner : { 
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },

  geometry : {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
});

// post is a mongoose middleware.first listing is deleted after that post middl is run and review is also deleted related to deleted listing.
listingSchema.post("findOneAndDelete",async(listing) => { 
  if(listing) { 
    await Review.deleteMany({
      // In listing.reviews directly stored only Objectid's.
      // In _id represent Review model and check _id match any listing.reviews id and then delete.
      _id : {$in:listing.reviews} 
    })
  }
});


// create collection/model.
const Listing = mongoose.model("Listing", listingSchema);

// export collection/model.
module.exports = Listing;
