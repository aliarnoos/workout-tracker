import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

function WorkoutDetails({ workout }) {
  const { user } = useAuthContext();
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch(
      "https://workout-tracker-app-ni9r.onrender.com/api/workouts/" +
        workout._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };
  return (
    <div className="shadow-md p-4 col-span-2 bg-white rounded flex justify-between items-start max-md:col-span-3 ">
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
