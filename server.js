// Configuring ENV
const dotenv = require("dotenv");
dotenv.config();

// App config
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routeUrls = require("./routes/routes.js");

// Middlewares
app.use(cors());

app.use("/", routeUrls);

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

const port = process.env.PORT|| 4000;
app.get("/", function (req, res) {
  res.status(200).send("Hello world!");
});
app.listen(port, () => `Server running on port ${port}`);

// app.get('/api/customers', cors(), (req, res) => {
//   const customers = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(customers);
// });
