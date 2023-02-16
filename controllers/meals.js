const mongodb = require("../databases/connect")
const ObjectId = require("mongodb").ObjectId
const {validationResult} = require("express-validator")

const getAll = async (req, res) => {
	const result = await mongodb.getDb().db().collection("meals").find()
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
		.collection("meals")
		.find({ _id: userId })
	result.toArray().then((lists) => {
		res.setHeader("Content-Type", "application/json")
		res.status(200).json(lists[0])
	})
}

const addMeal =async(req, res) =>{
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	  }
	const meal = {
		name: req.body.name,
		calories: req.body.calories,
		timeToMake: req.body.timeToMake,
		size: req.body.size,
	  };
	  const response = await mongodb.getDb().db().collection('meals').insertOne(meal);
	  if (response.acknowledged) {
		res.status(201).json(response);
	  } else {
		res.status(500).json(response.error || 'Some error occurred while creating the contact.');
	  }
	};

const updateMeal =async(req, res) =>{
	const errors = validationResult(req)
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	  }
	const userId = new ObjectId(req.params.id);
	const meal = {
		name: req.body.name,
		calories: req.body.calories,
		timeToMake: req.body.timeToMake,
		size: req.body.size,
	  };
	const response = await mongodb
	  .getDb()
	  .db()
	  .collection('meals')
	  .replaceOne({ _id: userId }, meal);
	console.log(response);
	if (response.modifiedCount > 0) {
	  res.status(204).send();
	} else {
	  res.status(500).json(response.error || 'Some error occurred while updating the workout.');
	}
  };

const deleteMeal =async(req, res) => {
	const userId = new ObjectId(req.params.id);
	const response = await mongodb.getDb().db().collection('meals').remove({ _id: userId }, true);
	console.log(response);
	if (response.deletedCount > 0) {
	  res.status(200).send();
	} else {
	  res.status(500).json(response.error || 'Some error occurred while deleting the workout.');
	}
  };


module.exports = {getAll, getSingle, addMeal, deleteMeal, updateMeal}