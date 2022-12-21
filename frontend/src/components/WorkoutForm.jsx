import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col  row-start-1 row-end-4	col-start-3 col-end-4  p-6 items-start	"
    >
      <h3 className="text-xl font-black  my-2">Add a New Workout: </h3>
      <label htmlFor="">Excersie Title:</label>
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="h-8 w-80 mb-6 mt-1 border-2 border-gray-300 rounded	focus:outline-none"
      />

      <label htmlFor="">Load (kg):</label>
      <input
        type="number"
        name="load"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className="h-8 w-80 mb-6 border-2 mt-1 border-gray-300 rounded	focus:outline-none"
      />

      <label htmlFor="">Reps:</label>
      <input
        type="number"
        name="reps"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className="h-8 w-80 mb-6 border-2 mt-1 border-gray-300 rounded	focus:outline-none"
      />
      <button className="bg-green-500 p-2 text-white font-bold rounded">
        Add Workout
      </button>
      {error && (
        <div className="text-red-600 bg-red-100 p-2  mt-4 border-2 border-red-600 rounded">
          {error}
        </div>
      )}
    </form>
  );
}

export default WorkoutForm;
