import { Router } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry';

const router = Router();

router.get('/', async (_req, res) => {
  const entries = await LeaderboardEntry.find().sort({ score: -1 });
  res.json(entries);
});

export default router;
