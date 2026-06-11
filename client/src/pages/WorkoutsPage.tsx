import WorkoutCard from "../components/WorkoutCard";
import {
  useWorkouts
} from "../hooks/useWorkouts";

import WorkoutForm from "../components/WorkoutForm";

import { useCallback } from "react";
import { eliminarWorkout } from "../api/client";

export default function WorkoutsPage() {

  const {
  workouts,
  loading,
  error
} = useWorkouts();

const handleDelete = useCallback(
  async (id: number) => {

    try {

      await eliminarWorkout(id);

      alert(
        "Rutina eliminada. Recarga la página para verla actualizada."
      );

    } catch (error) {

      console.error(error);

    }

  },
  []
);

if (loading) {
  return <p>Cargando rutinas...</p>;
}

if (error) {
  return (
    <p className="text-red-500">
      {error}
    </p>
  );
}

  return (
    <div className="space-y-4">

      <h1 className="text-3xl font-bold">
        Rutinas
      </h1>

      <WorkoutForm />

      {workouts.map(workout => (
        <WorkoutCard
  key={workout.id}
  workout={workout}
  onDelete={handleDelete}
/>
      ))}

    </div>
  );
}