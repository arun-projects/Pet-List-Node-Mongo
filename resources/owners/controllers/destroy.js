// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.params.id);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("owners").remove({_id: ownerId}, (err, removedOwner) => {
      res.sendStatus(200);
    });
  });
}
