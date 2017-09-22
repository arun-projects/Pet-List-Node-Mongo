// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("owners").aggregate([
      {
        $lookup: {
          from: "pets",
          localField: "_id",
          foreignField: "ownerId",
          as: "pets"
        }
      }
    ]).toArray((err, owners) => {
      res.render("index", {
        owners: owners
      });
    });
  });
}
