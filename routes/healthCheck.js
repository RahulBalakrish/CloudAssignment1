import * as healthCheckController from "../controllers/healthCheck.js";
import express from 'express';

const router = express.Router();
router.route('/').all(healthCheckController.DbHealthCheck);

export default router;
