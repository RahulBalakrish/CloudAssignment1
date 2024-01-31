import express from 'express';
import healthCheckRoute from './routes/index.js';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Sequelize from 'sequelize';

// dotenv Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
  override: true,
  path: path.join(__dirname,'dev.env')
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.text());
app.use(express.raw({ type: '*/*' }));

// Sequelize 
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DATABASE_SYS,
  logging: false
});

export default sequelize;

healthCheckRoute(app);

// Start the server
app.listen(process.env.APPLICATION_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APPLICATION_PORT}`);
});