/* const mongoose = require('mongoose');

mongoose.connect('mongodb://egeb:egebircan@cluster0-gv1sx.gcp.mongodb.net/test', { useNewUrlParser: true }).then(() => {
  console.log("connected to MongoDB");
}).catch(() => {
  console.log("OLMADI");
});  */

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://egeb:deneme@cluster0-gv1sx.gcp.mongodb.net/test";
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 