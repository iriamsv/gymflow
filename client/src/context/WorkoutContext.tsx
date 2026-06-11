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

interface WorkoutContextType {
  workouts: Workout[];
  loading: boolean;
  error: string | null;
  refreshWorkouts: () => Promise<void>;
}

const WorkoutContext =
  createContext<WorkoutContextType | null>(
    null
  );

interface WorkoutProviderProps {
  children: ReactNode;
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

  const refreshWorkouts = async () => {

    try {

      setLoading(true);

      const data =
        await obtenerWorkouts();

      setWorkouts(data);

      setError(null);

    } catch {

      setError(
        "No se pudieron cargar las rutinas"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    void refreshWorkouts();

  }, []);

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        loading,
        error,
        refreshWorkouts
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkoutContext() {

  const context =
    useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkoutContext debe usarse dentro de WorkoutProvider"
    );
  }

  return context;
}