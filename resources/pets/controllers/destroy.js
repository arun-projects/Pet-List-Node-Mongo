// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const petId = new ObjectId(req.params.id);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("pets").remove({_id: petId}, (err, removedPet) => {
      res.sendStatus(200);
    });
  });
}
