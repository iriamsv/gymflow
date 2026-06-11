import WorkoutCard from "../components/WorkoutCard";
import {
  useWorkouts
} from "../hooks/useWorkouts";

export default function WorkoutsPage() {

  const {
  workouts,
  loading,
  error
} = useWorkouts();

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
    <div className="space-y-4">

      <h1 className="text-3xl font-bold">
        Rutinas
      </h1>

      {workouts.map(workout => (
        <WorkoutCard
          key={workout.id}
          workout={workout}
        />
      ))}

    </div>
  );
}