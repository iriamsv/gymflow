const express = require("express");

const router = express.Router();

const workoutController =
  require("../controllers/workoutController");

router.get(
  "/",
  workoutController.obtenerWorkouts
);

router.post(
  "/",
  workoutController.crearWorkout
);

router.get(
  "/:id",
  workoutController.obtenerWorkoutPorId
);

router.delete(
  "/:id",
  workoutController.eliminarWorkout
);

module.exports = router;