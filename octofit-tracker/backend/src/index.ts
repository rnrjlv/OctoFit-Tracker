import express from 'express';
import mongoose from 'mongoose';
import healthRouter from './routes/health';
import activitiesRouter from './routes/activities';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app = express();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());
app.use('/api', healthRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/', (_req, res) => {
  res.send('OctoFit Tracker backend is running');
});

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, '0.0.0.0', () => {
      console.log(`Backend listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  });
