import { useState } from "react";

import { crearWorkout } from "../api/client";

import { useWorkouts } from "../hooks/useWorkouts";

interface WorkoutFormProps {
  onSuccess?: () => void;
}

export default function WorkoutForm({
  onSuccess
}: WorkoutFormProps) {

  const { refreshWorkouts } =
    useWorkouts();

  const [nombre, setNombre] =
    useState("");

  const [categoria, setCategoria] =
    useState("");

  const [ejercicios, setEjercicios] =
    useState(0);

  const handleSubmit = async (
    event: React.FormEvent
  ) => {

    event.preventDefault();

    try {

      await crearWorkout({
        nombre,
        categoria,
        ejercicios
      });

      await refreshWorkouts();

      onSuccess?.();

      alert("Rutina creada");

      setNombre("");
      setCategoria("");
      setEjercicios(0);

    } catch (error) {

      console.error(error);

      alert(
        "Error al crear la rutina"
      );

    }

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
  bg-white
  rounded-xl
  shadow-md
  p-6
  space-y-4
"
    >

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
        className="
  border
  rounded-lg
  p-3
  w-full
"
      />

      <input
        type="text"
        placeholder="Categoría"
        value={categoria}
        onChange={(e) =>
          setCategoria(e.target.value)
        }
        className="border p-2 w-full"
      />

      <input
        type="number"
        placeholder="Ejercicios"
        value={ejercicios}
        onChange={(e) =>
          setEjercicios(
            Number(e.target.value)
          )
        }
        className="border p-2 w-full"
      />

      <button
        type="submit"
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
        Crear rutina
      </button>

    </form>
  );
}