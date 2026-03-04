import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  password: 'abc12345',
  host: 'localhost',
  port: 5432,
  database: 'intro_db',
});

export default pool; 