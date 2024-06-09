import React from "react";

// WorkoutPlan component to display the workout plan
const WorkoutPlan = ({ data }) => {
  return (
    <div className="workout-plan">
      <h2 className="text-xl font-semibold mb-4">Workout Plan</h2>
      <div className="grid gap-4">
        {data.days.map((day, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="text-lg font-medium mb-2">{day.day}</h3>
            <div className="grid gap-2">
              {day.workoutPlan.map((workout, index) => (
                <div key={index}>
                  <h4 className="text-md font-medium mb-1">{workout.workoutType}</h4>
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
    <div className="diet-plan">
      <h2 className="text-xl font-semibold mb-4">Diet Plan</h2>
      <div className="grid gap-4">
        {data.days?.map((day, index) => (
          <div key={index} className="border p-4 rounded">
            <h3 className="text-lg font-medium mb-2">{day.day}</h3>
            <div className="grid gap-2">
              {day.dietPlan?.map((meal, index) => (
                <div key={index}>
                  <h4 className="text-md font-medium mb-1">{meal.meal}</h4>
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