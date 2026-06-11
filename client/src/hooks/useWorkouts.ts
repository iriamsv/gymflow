import {
  useWorkoutContext
} from "../context/WorkoutContext";

export function useWorkouts() {

  const {
    workouts,
    loading,
    error,
    refreshWorkouts
  } = useWorkoutContext();

  return {
    workouts,
    loading,
    error,
    refreshWorkouts
  };

}