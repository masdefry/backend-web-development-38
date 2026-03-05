import { Request, Response } from 'express';
import { employeeService } from '../services/employee.service';

export const employeeController = {
  async create(req: Request, res: Response) {
    try {
      const { name, salary, hire_date, department } = req.body;

      await employeeService.create({
        name,
        salary,
        hire_date,
        department,
      });

      return res.status(201).json({
        success: true,
        message: `New employee registered successfully`,
        data: {
          name,
          hire_date,
          department,
        },
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error?.message,
        data: null,
      });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const { page = 1, limit = 10 } = req.query;

      const {employees, totalData, totalPage} = await employeeService.getAll({
        page: parseInt(page as string),
        limit: parseInt(limit as string),
      });

      res.status(200).json({
        success: true, 
        message: 'Get employees successful', 
        data: {
          employees, 
          page, 
          limit, 
          totalData, 
          totalPage
        }
      })
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error?.message,
        data: null,
      });
    }
  },
};
