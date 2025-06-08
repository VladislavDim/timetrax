import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './modules/user/user.routes';
import authRoutes from "./modules/auth/auth.routes";
import {config} from './config';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRoutes);

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
