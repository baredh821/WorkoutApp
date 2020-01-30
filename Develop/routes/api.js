const router = require("express").Router();

const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(workoutINfo => {
        res.json(workoutINfo)
    })
})
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(8).then(workoutINfo => {
        res.json(workoutINfo)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router;