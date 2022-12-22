import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://workout-tracker-app-ni9r.onrender.com/api/workouts",
        { mode: "no-cors" }
      );
      console.log(response);
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
      if (!response.ok) {
        console.log("nooooooooooo");
      }
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className=" p-6 grid grid-cols-3 gap-6">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      <WorkoutForm />
    </div>
  );
}

export default Home;
