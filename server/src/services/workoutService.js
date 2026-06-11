const workouts = [
  {
    id: 1,
    nombre: "Piernas + Glúteos",
    categoria: "Piernas",
    ejercicios: 5,
    favorita: true
  },
  {
    id: 2,
    nombre: "Pecho + Tríceps",
    categoria: "Pecho",
    ejercicios: 4,
    favorita: false
  },
  {
    id: 3,
    nombre: "Espalda + Bíceps",
    categoria: "Espalda",
    ejercicios: 4,
    favorita: false
  }
];

const obtenerWorkouts = () => {
  return workouts;
};

const crearWorkout = (workout) => {

  workouts.push(workout);

  return workout;

};

const eliminarWorkout = (id) => {

  const index = workouts.findIndex(
    workout => workout.id === Number(id)
  );

  if (index === -1) {
    return null;
  }

  const eliminado =
    workouts.splice(index, 1);

  return eliminado[0];

};

const obtenerWorkoutPorId = (id) => {

  return workouts.find(
    workout => workout.id === Number(id)
  );

};

module.exports = {
  obtenerWorkouts,
  obtenerWorkoutPorId,
  crearWorkout,
  eliminarWorkout
};