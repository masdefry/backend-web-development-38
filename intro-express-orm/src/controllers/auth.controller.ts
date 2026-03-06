import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
  async register(req: Request, res: Response) {
    const { firstName, lastName, email, password, birthDate, role, hireAt } =
      req.body;

    await authService?.register({
      firstName,
      lastName,
      email,
      password,
      birthDate,
      role,
      hireAt,
    });

    res.status(201).json({
      success: true, 
      message: 'Register staff account successfully', 
      data: {
        firstName, 
        lastName
      }
    })
  },
};
