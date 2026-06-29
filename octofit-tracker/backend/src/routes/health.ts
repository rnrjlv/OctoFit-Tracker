import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

export default router;
