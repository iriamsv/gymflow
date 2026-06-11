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
    <div
      className="
        bg-white/90
        backdrop-blur-sm
        rounded-2xl
        shadow-lg
        p-6
        hover:shadow-2xl
hover:-translate-y-1
        transition
      "
    >
      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold">
            💪 {workout.nombre}
          </h2>

          <p className="text-gray-600 mt-2">
            Categoría: {workout.categoria}
          </p>

          <p className="text-gray-600">
            Ejercicios: {workout.ejercicios}
          </p>

        </div>

        {workout.favorita && (
          <span
            className="
              bg-yellow-100
              text-yellow-700
              px-3
              py-1
              rounded-full
              text-sm
              font-medium
            "
          >
            ⭐
          </span>
        )}

      </div>

      <button
        onClick={() =>
          onDelete?.(workout.id)
        }
        className="
          mt-6
          bg-red-500
          hover:bg-red-600
          text-white
          px-4
          py-2
          rounded-lg
          transition
        "
      >
        Eliminar
      </button>

    </div>
  );
}