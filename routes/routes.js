const express = require("express");
const router = express.Router();

// Importing models
const User = require("../models/user.js");

// Resource Models
const Bed = require("../models/beds.js");
const Blood = require("../models/blood.js");
const Chat = require("../models/chat.js");
const Food = require("../models/food.js");
const Medicine = require("../models/medicines.js");
const Oxygen = require("../models/oxygen.js");
const Remdesivir = require("../models/remdesivir.js");
const Testing = require("../models/testing.js");

module.exports = router;
