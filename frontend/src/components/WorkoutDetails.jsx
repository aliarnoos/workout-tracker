import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
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
        <p className="my-1 text-gray-500">{workout.createdAt}</p>
      </div>
      <button
        onClick={handleClick}
        className=" p-2 bg-red-500 rounded text-white"
      >
        Delete
      </button>
    </div>
  );
}

export default WorkoutDetails;