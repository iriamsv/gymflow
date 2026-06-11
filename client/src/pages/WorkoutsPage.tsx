import WorkoutCard from "../components/WorkoutCard";
import WorkoutForm from "../components/WorkoutForm";

import { useWorkouts } from "../hooks/useWorkouts";
import { eliminarWorkout } from "../api/client";

import { useCallback, useState } from "react";

export default function WorkoutsPage() {

  const {
    workouts,
    loading,
    error,
    refreshWorkouts
  } = useWorkouts();

  const [showForm, setShowForm] =
    useState(false);

  const handleDelete = useCallback(
    async (id: number) => {

      try {

        await eliminarWorkout(id);

        await refreshWorkouts();

        alert("Rutina eliminada");

      } catch (error) {

        console.error(error);

      }

    },
    [refreshWorkouts]
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

      <div>

        <button
          onClick={() =>
            setShowForm(!showForm)
          }
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            px-4
            py-2
            rounded-lg
            transition
          "
        >
          {showForm
            ? "Cerrar formulario"
            : "+ Nueva Rutina"}
        </button>

      </div>

      {showForm && (

  <div
    className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
    "
  >

    <div
      className="
        bg-white
        rounded-2xl
        shadow-2xl
        p-6
        w-full
        max-w-md
      "
    >

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-2xl font-bold">
          Nueva Rutina
        </h2>

        <button
          onClick={() =>
            setShowForm(false)
          }
          className="
            text-gray-500
            hover:text-black
            text-xl
          "
        >
          ✕
        </button>

      </div>

      <WorkoutForm
  onSuccess={() =>
    setShowForm(false)
  }
/>

    </div>

  </div>

)}

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