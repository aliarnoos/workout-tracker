import { useState } from "react";
import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className=" p-6 pl-24 grid grid-cols-3">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
    </div>
  );
}

export default Home;
