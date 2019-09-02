const express = require('express');
const app = express();
const port = process.env.PORT || 3001


app.listen(port, () => {
  console.log("Server listening on " + port);


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://egeb:deneme@cluster0-gv1sx.gcp.mongodb.net:27017/test";
const client = new MongoClient(uri);
client.connect(err => {
  // perform actions on the collection object
  console.log('error occured')
  console.log(err)
});

});