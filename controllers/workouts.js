const mongodb = require("../databases/connect")
const ObjectId = require("mongodb").ObjectId

const getAll = async (req, res) => {
	const result = await mongodb.getDb().db().collection("workouts").find()
	result.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json")
		res.status(200).json(lists)
	})
}

const getSingle = async (req, res) => {
	const userId = new ObjectId(req.params.id)
	const result = await mongodb
		.getDb()
		.db()
		.collection("workouts")
		.find({ _id: userId })
	result.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json")
		res.status(200).json(lists[0])
	})
}

const addWorkout =async(req, res) =>{
	const workout = {
		name: req.body.name,
		muscle: req.body.muscle,
		timeToComplete: req.body.timeToComplete,
		sets: req.body.sets,
		reps: req.body.reps
	  };
	  const response = await mongodb.getDb().db().collection('workouts').insertOne(workout);
	  if (response.acknowledged) {
		res.status(201).json(response);
	  } else {
		res.status(500).json(response.error || 'Some error occurred while creating the contact.');
	  }
	};

const updateWorkout =async(req, res) =>{
	const userId = new ObjectId(req.params.id);
	const workout = {
		name: req.body.name,
		muscle: req.body.muscle,
		timeToComplete: req.body.timeToComplete,
		sets: req.body.sets,
		reps: req.body.reps
	};
	const response = await mongodb
	  .getDb()
	  .db()
	  .collection('workouts')
	  .replaceOne({ _id: userId }, workout);
	console.log(response);
	if (response.modifiedCount > 0) {
	  res.status(204).send();
	} else {
	  res.status(500).json(response.error || 'Some error occurred while updating the workout.');
	}
  };

const deleteWorkout =async(req, res) => {
	const userId = new ObjectId(req.params.id);
	const response = await mongodb.getDb().db().collection('workouts').remove({ _id: userId }, true);
	console.log(response);
	if (response.deletedCount > 0) {
	  res.status(200).send();
	} else {
	  res.status(500).json(response.error || 'Some error occurred while deleting the workout.');
	}
  };


module.exports = {getAll, getSingle, addWorkout, deleteWorkout, updateWorkout}