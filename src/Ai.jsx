import React, { useState } from "react";
import { Button } from "@material-tailwind/react";

// Define the questions for each step
const steps = [
  {
    title: "Fitness Goals",
    questions: [
      {
        id: "goal",
        question: "What is your primary fitness goal?",
        options: [
          { value: "Build muscle", label: "Build muscle" },
          { value: "Lose weight", label: "Lose weight" },
          { value: "Improve endurance", label: "Improve endurance" },
          { value: "Increase flexibility", label: "Increase flexibility" },
        ],
      },
    ],
  },
  {
    title: "Workout Preferences",
    questions: [
      {
        id: "workoutDays",
        question: "How many days per week can you commit to working out?",
        options: [
          { value: "1-2 days", label: "1-2 days" },
          { value: "3-4 days", label: "3-4 days" },
          { value: "5-6 days", label: "5-6 days" },
          { value: "Every day", label: "Every day" },
        ],
      },
      {
        id: "workoutType",
        question: "What type of workouts do you prefer?",
        options: [
          { value: "Strength training", label: "Strength training" },
          { value: "Cardio", label: "Cardio" },
          {
            value: "Flexibility and mobility",
            label: "Flexibility and mobility",
          },
          { value: "Mixed routines", label: "Mixed routines" },
        ],
      },
    ],
  },
  {
    title: "Dietary Habits",
    questions: [
      {
        id: "dietaryRestrictions",
        question: "Do you have any dietary restrictions?",
        options: [
          { value: "None", label: "None" },
          { value: "Vegetarian", label: "Vegetarian" },
          { value: "Vegan", label: "Vegan" },
          { value: "Gluten-free", label: "Gluten-free" },
          { value: "Other", label: "Other" },
        ],
      },
      {
        id: "eatingOutFrequency",
        question: "How often do you eat out?",
        options: [
          { value: "Rarely", label: "Rarely" },
          { value: "1-2 times per week", label: "1-2 times per week" },
          { value: "3-4 times per week", label: "3-4 times per week" },
          { value: "Almost every day", label: "Almost every day" },
        ],
      },
    ],
  },
  {
    title: "Body Type and Metabolism",
    questions: [
      {
        id: "bodyType",
        question: "How would you describe your body type?",
        options: [
          {
            value: "Ectomorph",
            label: "Ectomorph (lean, difficulty gaining weight)",
          },
          {
            value: "Mesomorph",
            label: "Mesomorph (athletic, gains muscle easily)",
          },
          {
            value: "Endomorph",
            label: "Endomorph (higher body fat, gains weight easily)",
          },
        ],
      },
      {
        id: "metabolism",
        question: "How would you describe your metabolism?",
        options: [
          { value: "Fast", label: "Fast" },
          { value: "Average", label: "Average" },
          { value: "Slow", label: "Slow" },
        ],
      },
    ],
  },
  {
    title: "Lifestyle and Activity Level",
    questions: [
      {
        id: "activityLevel",
        question: "What is your daily activity level?",
        options: [
          { value: "Sedentary", label: "Sedentary (little to no exercise)" },
          {
            value: "Lightly active",
            label: "Lightly active (light exercise/sports 1-3 days/week)",
          },
          {
            value: "Moderately active",
            label: "Moderately active (moderate exercise/sports 3-5 days/week)",
          },
          {
            value: "Very active",
            label: "Very active (hard exercise/sports 6-7 days/week)",
          },
        ],
      },
      {
        id: "mealPrepTime",
        question:
          "How much time can you dedicate to meal preparation each day?",
        options: [
          { value: "Less than 30 minutes", label: "Less than 30 minutes" },
          { value: "30-60 minutes", label: "30-60 minutes" },
          { value: "More than 60 minutes", label: "More than 60 minutes" },
        ],
      },
    ],
  },
];

export default function FitnessStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [response, setResponse] = useState(null);

  const isLastStep = activeStep === steps.length - 1;
  const isFirstStep = activeStep === 0;

  const handleNext = () => {
    if (!isLastStep) setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (!isFirstStep) setActiveStep(activeStep - 1);
  };

  const handleAnswerChange = (stepIndex, questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [stepIndex]: {
        ...prev[stepIndex],
        [questionId]: value,
      },
    }));
  };

  const handleSubmit = () => {
    console.log("User Answers: ", answers);
    // You can add code here to handle form submission
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4">
      <div className="relative flex items-center justify-center mb-8 w-[350px] mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center justify-center relative w-10 h-10 mr-6 rounded-full cursor-pointer ${
              activeStep === index
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveStep(index)}
          >
            {index + 1}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-full top-1/2 w-full h-0.5 transform -translate-y-1/2 ${
                  activeStep >= index + 1 ? "bg-primary" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Stepper Content */}
      <div className="mt-8 w-full">
        <h2 className="text-xl font-semibold mb-4">
          {steps[activeStep].title}
        </h2>
        {steps[activeStep].questions.map((question) => (
          <div key={question.id} className="mb-4">
            <label className="block font-medium mb-2">
              {question.question}
            </label>
            <select
              className="block w-[600px] p-2 border rounded"
              value={answers[activeStep]?.[question.id] || ""}
              onChange={(e) =>
                handleAnswerChange(activeStep, question.id, e.target.value)
              }
            >
              <option value="" disabled>
                Select an option
              </option>
              {question.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      {/* Stepper Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Prev
        </Button>
        {isLastStep ? (
          <Button
            onClick={handleSubmit}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
