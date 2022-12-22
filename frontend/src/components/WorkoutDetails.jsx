import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch(
      "https://workout-tracker-app-ni9r.onrender.com/api/workouts" +
        workout._id,
      {
        method: "DELETE",
        mode: "no-cors",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="shadow-md p-4 col-span-2 bg-white rounded flex justify-between items-start">
      <div className="">
        <h4 className="text-xl font-black text-green-500 my-2">
          {workout.title}
        </h4>
        <p className="my-1 text-gray-500">
          <strong className="text-black">Load (kg): </strong>
          {workout.load}
        </p>
        <p className="my-1 text-gray-500">
          <strong className="text-black">Reps (kg): </strong>
          {workout.reps}
        </p>
        <p className="my-1 text-gray-500">
          {formatDistanceToNow(new Date(workout.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
      <button
        onClick={handleClick}
        className=" p-1 bg-gray-200 rounded text-gray-600 <style>
        material-symbols-outlined"
      >
        Delete
      </button>
    </div>
  );
}

export default WorkoutDetails;
