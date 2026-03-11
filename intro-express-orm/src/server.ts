import express, { Express, NextFunction, Request, Response } from 'express';
import authRouter from './routers/auth.router';
import memberRouter from './routers/member.router';
import cors from 'cors';

const app: Express = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/members', memberRouter);

// Centralized Error Response
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: error?.message,
    data: {},
  });
});

const port = 8000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
