import { useMemo } from "react";

import { useWorkouts } from "../hooks/useWorkouts";

export default function StatsPage() {

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
    <div className="space-y-4">

      <h1 className="text-3xl font-bold">
        Estadísticas
      </h1>

      <div className="border rounded p-4">
        <p>
          Total de rutinas: {totalRutinas}
        </p>
      </div>

      <div className="border rounded p-4">
        <p>
          Total de ejercicios: {totalEjercicios}
        </p>
      </div>

      <div className="border rounded p-4">
        <p>
          Rutinas favoritas: {totalFavoritas}
        </p>
      </div>

    </div>
  );
}