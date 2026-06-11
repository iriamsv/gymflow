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