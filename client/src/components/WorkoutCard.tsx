import type { Workout } from "../types/Workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout
}: WorkoutCardProps) {
  return (
    <div className="rounded-lg border p-4 shadow">

      <h2 className="text-xl font-bold">
        {workout.nombre}
      </h2>

      <p>
        Categoría: {workout.categoria}
      </p>

      <p>
        Ejercicios: {workout.ejercicios}
      </p>

      {workout.favorita && (
        <span>
          ⭐ Favorita
        </span>
      )}

    </div>
  );
}