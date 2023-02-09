const { check } = require('express-validator');

exports.workoutValidation = [
    check('name', 'name is reqired').not().isEmpty(),
    check('muscle', 'muscle is required').not().isEmpty(),
    check('timeToComplete', "please input a time to complete").not().isEmpty(),
    check('sets', 'include number of sets').not().isEmpty(),
    check('reps', 'please add the number of reps').not().isEmpty()
]