import { Select } from "./components/select/Select";
import "./App.css";
import { Button } from "./components/button/Button";
import { OpenAI } from "openai";
import { useState } from "react";
import mockResponse from "./mockResponse";
import { LoadingScreen } from "./components/loading-screen/LoadingScreen";
import type { TrainingPlan } from "./types";
import { TrainingDay } from "./components/TrainingDay/TrainingDay";

const minifyPrompt = (str: string): string =>
  str.replace(/\s+/g, " ").replace(/\n|\t/g, "").trim();

function getPrompt(split: string, muscles: string[]) {
  return `
  "Generate a structured ${split} gym training plan in JSON format, emphasizing weak muscles: ${muscles.join(
    ", "
  )}. Structure it with days of the week as keys and include:
    - Exercises
    - Number of sets
    - Target reps
    - Progression guidelines
Ensure balance while prioritizing the selected muscles. Use this JSON scheme:
${JSON.stringify({
  day_of_week: {
    exercises: [{ name: "string", sets: "integer", reps: "string" }],
    progression_guidelines: "string",
  },
})}"`;
}

const _TRAINING_SPLIT_OPTIONS = [
  { value: "ppl", label: "Push Pull Leg" },
  { value: "bro-split", label: "Bro Split" },
  { value: "upper-lower", label: "Upper Lower" },
  { value: "full-body", label: "Full Body" },
];

const _WEAK_MUSCLES = [
  { value: "back", label: "Back" },
  { value: "chest", label: "Chest" },
  { value: "arms", label: "Arms" },
  { value: "legs", label: "Legs" },
  { value: "shoulders", label: "Shoulders" },
];

function App() {
  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_API_SECRET,
    dangerouslyAllowBrowser: true,
  });

  const [split, setSplit] = useState<Array<string>>([]);
  const [weakMuscles, setWeakMuscles] = useState<Array<string>>([]);
  const [response, setResponse] = useState<TrainingPlan | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function getTrainingPlan() {
    setIsLoading(true);
    const prompt = getPrompt(split[0], weakMuscles);

    console.log(prompt);
    console.log(mockResponse);

    client.responses
      .create({
        model: "gpt-4.1-mini",
        input: minifyPrompt(prompt),
        text: {
          format: {
            type: "json_object",
          },
        },
      })
      .then((res) => {
        setResponse(JSON.parse(res.output_text));
        setIsLoading(false);
      });
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <label className="label">Training Split</label>
      <Select options={_TRAINING_SPLIT_OPTIONS} onSelect={setSplit} />

      <label className="label">
        Weak muscles <span>(max 2)</span>
      </label>
      <Select options={_WEAK_MUSCLES} limit={2} onSelect={setWeakMuscles} />
      <Button
        disabled={split.length === 0 || weakMuscles.length === 0}
        className="generate-btn"
        onClick={getTrainingPlan}
      >
        Generate
      </Button>
      {response !== undefined &&
        Object.entries(response).map(
          ([day, { exercises, progression_guidelines }]) => (
            <TrainingDay
              key={day}
              day={day}
              exercises={exercises}
              progression_guidelines={progression_guidelines}
            />
          )
        )}
    </>
  );
}

export default App;
