const express = require("express");
const router = express.Router();

// Importing models
const User = require("../models/user.js");

// Resource Model
const Resource = require("../models/resource.js");
const user = require("../models/user.js");

router.post("/submit/resource", (req, res) => {
  console.log("Request received");
  const resource = new Resource({
    personSubmitter: req.body.personSubmitter,
    resourceType: req.body.resourceType, // remdesivir or stuff
    resourceName: req.body.resourceName,
    resourceDescription: req.body.resourceDescription,
    resourceContact: req.body.resourceContact,
    resourceLocation: {
      state: req.body.resourceLocation.state,
      city: req.body.resourceLocation.city,
    },
    resourceType2: req.body.resourceType2, // subbranch of resource like refilling or empty cyllinder
    resourceVerified: req.body.resourceVerified, // when last verified
  });
  resource
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      res.send("Resource could not be submitted due to an error");
      console.log(err);
    });
});
router.get("/:requestedResource", (req, res) => {
  const requestedResource = req.params.requestedResource
  console.log(requestedResource)
  console.log("Something received");
  console.log(req.query);
  Resource.find(
    {
      "resourceLocation.state": req.query.state,
      "resourceLocation.city": req.query.city,
      resourceType: requestedResource,
    },
    function (err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(data);
      }
    }
  );
});
module.exports = router;
