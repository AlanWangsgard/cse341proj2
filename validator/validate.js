const { check } = require('express-validator');

exports.workoutValidation = [
    check('name', 'name is reqired').not().isEmpty(),
    check('primaryMuscle', 'muscle is required').not().isEmpty(),
    check('secondaryMuscle', 'muscle is required').not().isEmpty(),
    check('timeToComplete', "please input a time to complete").not().isEmpty(),
    check('sets', 'include number of sets').not().isEmpty(),
    check('reps', 'please add the number of reps').not().isEmpty(),
    check('equipment', 'equipment is required').not().isEmpty(),
]

exports.mealValidation = [
//     name: req.body.name,
// 		calories: req.body.calories,
// 		timeToMake: req.body.timeToMake,
// 		size: req.body.size,
check('name', 'name is reqired').not().isEmpty(),
    check('calories', 'calories are required').not().isEmpty(),
    check('timeToMake', 'time to make is required').not().isEmpty(),
    check('size', "size is required").not().isEmpty(),
]