import pool from '../configs/pool-connection.config';

type Employee = {
  name: string;
  salary: number;
  hire_date: string;
  department: string;
};

type Pagination = {
  page: number;
  limit: number;
};

export const employeeService = {
  async create({ name, salary, hire_date, department }: Employee) {
    await pool.query(
      `insert into employees(name, salary, hire_date, department) values($1, $2, $3, $4)`,
      [name, salary, hire_date, department],
    );
  },

  async getAll({ page, limit }: Pagination) {
    const offset = (page - 1) * limit;

    const employees = await pool.query(
      `select * from employees offset $1 limit $2`,
      [offset, limit],
    );

    return {
        employees: employees?.rows, 
        totalData: employees?.rowCount, 
        totalPage: Math.ceil(employees?.rowCount!/limit)
    }
  },
};
