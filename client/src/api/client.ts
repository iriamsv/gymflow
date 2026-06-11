import type { Workout } from "../types/Workout";

const API_URL =
  "http://localhost:3000/api/v1/workouts";

export async function obtenerWorkouts():
Promise<Workout[]> {

  const response =
    await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "Error al obtener workouts"
    );
  }

  return response.json();
}

export async function crearWorkout(workout: {
  nombre: string;
  categoria: string;
  ejercicios: number;
}) {

  const response = await fetch(
    API_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(workout)
    }
  );

  if (!response.ok) {
    throw new Error(
      "Error al crear workout"
    );
  }

  return response.json();
}

export async function eliminarWorkout(
  id: number
) {

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE"
    }
  );

  if (!response.ok) {
    throw new Error(
      "Error al eliminar workout"
    );
  }

  return response.json();
}