import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  userId: string;
  title: string;
  type: string;
  duration: number;
  intensity: string;
  completed: boolean;
}

const WorkoutSchema = new Schema<IWorkout>({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  intensity: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

export default mongoose.model<IWorkout>('Workout', WorkoutSchema);
