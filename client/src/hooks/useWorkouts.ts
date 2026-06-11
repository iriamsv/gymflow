import {
  useWorkoutContext
} from "../context/WorkoutContext";

export function useWorkouts() {

  const context =
    useWorkoutContext();

  return context;

}