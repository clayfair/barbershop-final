var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");
var db = require("./Models");
var app = express();
const PORT = process.env.PORT || 3001;
var Shops = require("./Models/Shops");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://shops:shops24@ds151180.mlab.com:51180/squire-app");

app.post("/shops", function (req, res) {
  Shops.create(req.body)
    .then(function(dbShop) {
      res.json(dbShop);
  })
    .catch(function(err) {
      res.json(err);
    })
})

app.get("/shops", function (req, res) {
  Shops.find()
    .then(function(dbShops) {
      res.json(dbShops);
  })
    .catch(function(err) {
      res.json(err);
    })
})

app.get("/shop/:id", function (req, res) {
  Shops.findById(req.params.id)
    .then(function(dbShop) {
      res.json(dbShop);
  })
    .catch(function(err) {
      res.json(err);
    })
})

// app.get("/shop/:5b46ab333846cf0509de85d4", function (req, res) {
//   res.sendFile(path.join(__dirname, "/client/src/components"));
// })



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
