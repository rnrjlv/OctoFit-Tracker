import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  duration: number;
  calories: number;
  completedAt: Date;
}

const ActivitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true },
  calories: { type: Number, required: true },
  completedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IActivity>('Activity', ActivitySchema);
