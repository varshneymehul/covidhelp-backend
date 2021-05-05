const mongoose = require("mongoose");
const resourceSchema = mongoose.Schema({
  personSubmitter: String,
  resourceType: String, // remdesivir or stuff
  resourceName: String,
  resourceDescription: String,
  resourceContact: String,
  resourceContact2: String,
  resourceLocation: {
    state: String,
    city: String,
  },
  resourceType2: String, // subbranch of resource like refilling or empty cyllinder
  resourceVerified: String, // when last verified
});
module.exports = mongoose.model("resource", resourceSchema);
