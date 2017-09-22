// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const ownerId = new ObjectId(req.params.id);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("owners").update({_id: ownerId}, {
      $set: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
      }
    }, (err, updatedOwner) => {
      res.redirect("/");
    });
  });
}
