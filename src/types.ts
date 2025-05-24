export interface Exercise {
  name: string;
  sets: string;
  reps: string;
}

export interface ExerciseSet {
  exercises: Exercise[];
  progression_guidelines: string;
}

export interface TrainingPlan {
  [day: string]: ExerciseSet;
}
