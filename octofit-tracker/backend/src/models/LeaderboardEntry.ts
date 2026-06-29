import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId: string;
  userName: string;
  score: number;
  streak: number;
}

const LeaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  score: { type: Number, required: true },
  streak: { type: Number, required: true },
});

export default mongoose.model<ILeaderboardEntry>('LeaderboardEntry', LeaderboardEntrySchema);
