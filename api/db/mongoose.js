/* const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://egebircan:deneme@galleria-gv1sx.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.log("connected to MongoDB");
}).catch(() => {
  err => console.log(error);
});
 */

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://egebircan:<password>@galleria-gv1sx.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
})
