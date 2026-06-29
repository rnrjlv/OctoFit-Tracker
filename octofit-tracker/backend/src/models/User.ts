import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  fitnessLevel: string;
  goals: string[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessLevel: { type: String, required: true },
  goals: [{ type: String }],
});

export default mongoose.model<IUser>('User', UserSchema);
