import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode
} from "react";

import {
  obtenerWorkouts
} from "../api/client";

import type { Workout } from "../types/Workout";


const WorkoutContext = createContext<WorkoutContextType | null>(null);

interface WorkoutProviderProps {
  children: ReactNode;
}

interface WorkoutContextType {
  workouts: Workout[];
  loading: boolean;
  error: string | null;
}

export function WorkoutProvider({
  children
}: WorkoutProviderProps) {

  const [workouts, setWorkouts] =
    useState<Workout[]>([]);

    const [loading, setLoading] =
  useState(true);

const [error, setError] =
  useState<string | null>(null);

  useEffect(() => {

  obtenerWorkouts()

    .then(data => {
      setWorkouts(data);
      setLoading(false);
    })

    .catch(() => {
      setError(
        "No se pudieron cargar las rutinas"
      );
      setLoading(false);
    });

}, []);

  return (
    <WorkoutContext.Provider
      value={{
  workouts,
  loading,
  error
}}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkoutContext() {

  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkoutContext debe usarse dentro de WorkoutProvider"
    );
  }

  return context;
}