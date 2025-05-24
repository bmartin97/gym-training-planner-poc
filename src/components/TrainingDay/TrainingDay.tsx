import type { ExerciseSet } from "../../types";

import "./TrainingDay.css";

interface Props extends ExerciseSet {
  day: string;
}

export const TrainingDay = ({
  day,
  exercises,
  progression_guidelines,
}: Props) => {
  return (
    <div className="training-day-container">
      <div className="training-day">{day}</div>
      <div className="exercise-guidelines">{progression_guidelines}</div>
      {exercises.map(({ name, sets, reps }) => (
        <div className="exercise">
          <div className="exercise-name">{name}</div>
          {sets && <div className="exercise-sets">{sets}</div>}
          {reps && <div className="exercise-reps">{reps}</div>}
        </div>
      ))}
    </div>
  );
};
