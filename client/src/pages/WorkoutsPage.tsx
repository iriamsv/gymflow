import WorkoutCard from "../components/WorkoutCard";
import { useWorkouts } from "../hooks/useWorkouts";
import WorkoutForm from "../components/WorkoutForm";

import { useCallback } from "react";
import { eliminarWorkout } from "../api/client";

export default function WorkoutsPage() {

  const {
  workouts,
  loading,
  error,
  refreshWorkouts
} = useWorkouts();

  const handleDelete = useCallback(
    async (id: number) => {

      try {

        await eliminarWorkout(id);

await refreshWorkouts();

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
    <div className="max-w-6xl mx-auto space-y-6">

      <h1 className="text-3xl font-bold">
        Rutinas
      </h1>

      <WorkoutForm />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {workouts.map(workout => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onDelete={handleDelete}
          />
        ))}

      </div>

    </div>
  );
}