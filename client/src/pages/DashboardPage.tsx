import { useMemo } from "react";
import { Link } from "react-router-dom";

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

  const ultimasRutinas = useMemo(() => {
    return [...workouts].slice(-3).reverse();
  }, [workouts]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Bienvenida a GymFlow 💪
        </h1>

        <p className="text-gray-500 mt-2">
          Gestiona tus rutinas y consulta tus estadísticas.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-gray-500 text-sm">
            Total de rutinas
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalRutinas}
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-gray-500 text-sm">
            Total de ejercicios
          </h2>

          <p className="text-4xl font-bold mt-2">
            {totalEjercicios}
          </p>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Últimas rutinas
        </h2>

        {ultimasRutinas.length === 0 ? (
          <p>No hay rutinas disponibles.</p>
        ) : (
          <ul className="space-y-3">

            {ultimasRutinas.map(workout => (
              <li
                key={workout.id}
                className="border-b pb-2"
              >
                <strong>
                  {workout.nombre}
                </strong>

                <p className="text-gray-500 text-sm">
                  {workout.categoria}
                </p>
              </li>
            ))}

          </ul>
        )}

      </div>

      <div className="flex gap-4">

        <Link
          to="/workouts"
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            px-5
            py-3
            rounded-lg
            transition
          "
        >
          Ver Rutinas
        </Link>

        <Link
          to="/stats"
          className="
            bg-gray-800
            hover:bg-gray-900
            text-white
            px-5
            py-3
            rounded-lg
            transition
          "
        >
          Ver Estadísticas
        </Link>

      </div>

    </div>
  );
}