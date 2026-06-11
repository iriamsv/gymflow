import { useState } from "react";

import { crearWorkout } from "../api/client";

export default function WorkoutForm() {

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
      className="space-y-4 border p-4 rounded"
    >

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
        className="border p-2 w-full"
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
        className="bg-green-500 px-4 py-2 rounded"
      >
        Crear rutina
      </button>

    </form>
  );
}