// Configuring ENV
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
const mySecret = process.env["DATABASE_URL"];

// App config
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors());

mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Database is connected");
  }
);

const Resource = require("./models/resource.js");

app.post("/submit/resource", (req, res) => {
  console.log("Request received");
  const resource = new Resource({
    personSubmitter: req.body.personSubmitter,
    resourceType: req.body.resourceType, // remdesivir or stuff
    resourceName: req.body.resourceName,
    resourceDescription: req.body.resourceDescription,
    resourceContact: req.body.resourceContact,
    resourceContact2: req.body.resourceContact2,
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
app.get("/:requestedResource", (req, res) => {
  const requestedResource = req.params.requestedResource;
  console.log(requestedResource);
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

app.listen(port, function () {
  console.log(`Server running on port ${port}`);
});
