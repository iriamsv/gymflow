import { useMemo } from "react";
import { useWorkouts } from "../hooks/useWorkouts";

export default function DashboardPage() {

  const { workouts } = useWorkouts();

  const totalRutinas = useMemo(() => {
    return workouts.length;
  }, [workouts]);

  const totalEjercicios = useMemo(() => {
    return workouts.reduce(
      (total, workout) =>
        total + workout.ejercicios,
      0
    );
  }, [workouts]);

  const totalFavoritas = useMemo(() => {
    return workouts.filter(
      workout => workout.favorita
    ).length;
  }, [workouts]);

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Total Rutinas
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalRutinas}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Total Ejercicios
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalEjercicios}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-gray-500 text-sm">
            Favoritas
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalFavoritas}
          </p>
        </div>

      </div>

    </div>
  );
}