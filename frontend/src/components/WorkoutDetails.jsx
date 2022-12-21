function WorkoutDetails({ workout }) {
  return (
    <div className="shadow-md p-4 col-span-2 bg-white">
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
  );
}

export default WorkoutDetails;
