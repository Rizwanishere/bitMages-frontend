import React from "react";

// WorkoutPlan component to display the workout plan
const WorkoutPlan = ({ data }) => {
  return (
    <div className="workout-plan p-4">
      {/* <h2 className="text-xl font-semibold mb-4">Workout Plan</h2> */}
      <div className="grid gap-4">
        {data.days.map((day, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2 text-primary">{day.day}</h3>
            <hr/>
            <div className="grid gap-2">
              {day.workoutPlan.map((workout, index) => (
                <div key={index} className="p-4">
                  <h4 className="font-semibold  mb-1">{workout.workoutType}</h4>
                  <ul className="list-disc pl-5">
                    {workout.workoutSteps.map((step, index) => (
                      <li key={index} className="mb-1">
                        {step.workoutVariation && (
                          <span>{step.workoutVariation}</span>
                        )}
                        {step.workoutSets && <span className="ml-2">{step.workoutSets}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// DietPlan component to display the diet plan
const DietPlan = ({ data }) => {
  if (!data) return null; // Render nothing if data is undefined or null

  return (
    <div className="diet-plan m-4">
      {/* <h2 className="text-xl font-semibold mb-4">Diet Plan</h2> */}
      <div className="grid gap-4">
        {data.days?.map((day, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2 text-primary">{day.day}</h3>
            <hr/>
            <div className="grid gap-2">
              {day.dietPlan?.map((meal, index) => (
                <div key={index} className="p-3">
                  <h4 className=" font-semibold mb-1">{meal.meal}</h4>
                  <ul className="list-disc pl-5">
                    <li className="mb-1">{meal.foodItems}</li>
                    <li className="mb-1">{meal.calories} calories</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WorkoutPlan, DietPlan };
