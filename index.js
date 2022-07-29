const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes.index");
const http = require("http");
const server = http.createServer(app);

const io = require("./Notifier").init(server);

// load .env file in to  bash
require("dotenv").config();
var cors = require("cors");

//get
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());




// reg routing table

app.use("/api/", routes);



//COnnect to db server
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("Connection Successful!");
  server.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
