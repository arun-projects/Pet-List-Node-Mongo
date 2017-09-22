// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.body.ownerId);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("pets").insert({
      petName: req.body.petName,
      age: req.body.age,
      breed: req.body.breed,
      photo: req.body.photo,
      ownerId: ownerId
    }, (err, newPet) => {
      res.redirect("/");
    });
  });
}
