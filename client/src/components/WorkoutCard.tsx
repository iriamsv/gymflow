import type { Workout } from "../types/Workout";

interface WorkoutCardProps {
  workout: Workout;
  onDelete?: (id: number) => void;
}

export default function WorkoutCard({
  workout,
  onDelete
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

      <button
  onClick={() =>
    onDelete?.(workout.id)
  }
  className="mt-2 bg-red-500 px-3 py-1 rounded"
>
  Eliminar
</button>

    </div>
  );
}