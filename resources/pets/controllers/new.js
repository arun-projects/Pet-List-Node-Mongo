// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.query.owner_id);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("owners").findOne({_id: ownerId}, (err, owner) => {
      res.render("add_pet", {
        owner: owner
      });
    });
  });
}
