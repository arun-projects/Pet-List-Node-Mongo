// MongoDB connection
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const mongoUrl = "mongodb://localhost:27017/pet_list_db";

module.exports = (req, res) => {
  const petId = new ObjectId(req.params.id);

  MongoClient.connect(mongoUrl, (err, db) => {
    db.collection("pets").update({_id: petId}, {
      $set: {
        petName: req.body.petName,
        age: req.body.age,
        breed: req.body.breed,
        photo: req.body.photo
      }
    }, (err, updatedPet) => {
      res.redirect("/");
    });
  });
}
