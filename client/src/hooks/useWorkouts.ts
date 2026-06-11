import { useWorkoutContext } from "../context/WorkoutContext";

export function useWorkouts() {

  const {
    workouts,
    loading,
    error
  } = useWorkoutContext();

  return {
    workouts,
    loading,
    error
  };

}