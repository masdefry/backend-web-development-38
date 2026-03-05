import express, { Express } from 'express';
import pool from './configs/pool-connection.config';
import employeeRouter from './routers/employee.router';

const app: Express = express();
app.use(express.json());

pool.connect((err, client, release) => {
    if(err) return console.error(`❌[DATABASE]: Database error: ${err?.stack}`);

    console.info(`✔️[DATABASE]: Database is currently connected`);

    release();
})

app.use('/api/employees', employeeRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
