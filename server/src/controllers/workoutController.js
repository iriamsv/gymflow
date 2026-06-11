const workoutService =
  require("../services/workoutService");

const obtenerWorkouts = (req, res) => {

  const workouts =
    workoutService.obtenerWorkouts();

  res.status(200).json(workouts);

};

const crearWorkout = (req, res) => {

  const {
    nombre,
    categoria,
    ejercicios
  } = req.body;

  if (
    !nombre ||
    !categoria ||
    ejercicios === undefined
  ) {
    return res.status(400).json({
      error: "Todos los campos son obligatorios"
    });
  }

  const nuevoWorkout =
    workoutService.crearWorkout({

      id: Date.now(),

      nombre,

      categoria,

      ejercicios,

      favorita: false

    });

  res
    .status(201)
    .json(nuevoWorkout);

};

const eliminarWorkout = (req, res) => {

  const { id } = req.params;

  const workoutEliminado =
    workoutService.eliminarWorkout(id);

  if (!workoutEliminado) {
    return res.status(404).json({
      error: "Workout no encontrado"
    });
  }

  res.status(200).json(workoutEliminado);

};

const obtenerWorkoutPorId = (req, res) => {

  const { id } = req.params;

  const workout =
    workoutService.obtenerWorkoutPorId(id);

  if (!workout) {
    return res.status(404).json({
      error: "Workout no encontrado"
    });
  }

  res.status(200).json(workout);

};

module.exports = {
  obtenerWorkouts,
  obtenerWorkoutPorId,
  crearWorkout,
  eliminarWorkout
};