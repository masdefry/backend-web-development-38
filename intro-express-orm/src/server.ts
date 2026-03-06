import express, { Express, NextFunction, Request, Response } from 'express';
import authRouter from './routers/auth.router';

const app: Express = express();
app.use(express.json());

app.use('/api/auth', authRouter)

// Centralized Error Response
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false, 
    message: error?.message, 
    data: {}
  })
})

const port = 8000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
