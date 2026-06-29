import mongoose from 'mongoose';
import User from '../models/User';
import Team from '../models/Team';
import Activity from '../models/Activity';
import LeaderboardEntry from '../models/LeaderboardEntry';
import Workout from '../models/Workout';

// Seed the octofit_db database with test data.
async function seed() {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
  await mongoose.connect(mongoUri);

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  const users = await User.insertMany([
    {
      name: 'Ava Martinez',
      email: 'ava@example.com',
      fitnessLevel: 'advanced',
      goals: ['run a 10K', 'improve mobility'],
    },
    {
      name: 'Noah Chen',
      email: 'noah@example.com',
      fitnessLevel: 'intermediate',
      goals: ['build strength', 'sleep better'],
    },
    {
      name: 'Mina Patel',
      email: 'mina@example.com',
      fitnessLevel: 'beginner',
      goals: ['walk more', 'reduce stress'],
    },
  ]);

  const teams = await Team.insertMany([
    {
      name: 'Storm Squad',
      sport: 'running',
      members: users.slice(0, 2).map((user) => user._id.toString()),
      captain: users[0]._id.toString(),
    },
    {
      name: 'Peak Performers',
      sport: 'cross-training',
      members: [users[2]._id.toString()],
      captain: users[2]._id.toString(),
    },
  ]);

  await Activity.insertMany([
    {
      userId: users[0]._id.toString(),
      type: 'run',
      duration: 45,
      calories: 480,
      completedAt: new Date('2026-06-28T07:00:00Z'),
    },
    {
      userId: users[1]._id.toString(),
      type: 'strength',
      duration: 60,
      calories: 520,
      completedAt: new Date('2026-06-28T18:30:00Z'),
    },
    {
      userId: users[2]._id.toString(),
      type: 'yoga',
      duration: 30,
      calories: 180,
      completedAt: new Date('2026-06-29T06:30:00Z'),
    },
  ]);

  await LeaderboardEntry.insertMany([
    {
      userId: users[0]._id.toString(),
      userName: users[0].name,
      score: 1420,
      streak: 7,
    },
    {
      userId: users[1]._id.toString(),
      userName: users[1].name,
      score: 1280,
      streak: 4,
    },
    {
      userId: users[2]._id.toString(),
      userName: users[2].name,
      score: 980,
      streak: 3,
    },
  ]);

  await Workout.insertMany([
    {
      userId: users[0]._id.toString(),
      title: 'Tempo Run',
      type: 'cardio',
      duration: 40,
      intensity: 'high',
      completed: true,
    },
    {
      userId: users[1]._id.toString(),
      title: 'Upper Body Strength',
      type: 'strength',
      duration: 50,
      intensity: 'medium',
      completed: false,
    },
    {
      userId: users[2]._id.toString(),
      title: 'Morning Mobility',
      type: 'mobility',
      duration: 20,
      intensity: 'low',
      completed: true,
    },
  ]);

  console.log('Seed the octofit_db database with test data');
  console.log(`Inserted ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts.`);

  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error('Seed failed', error);
  process.exit(1);
});
