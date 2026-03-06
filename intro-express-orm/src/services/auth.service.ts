import { Staff } from '../../generated/prisma/client';
import prisma from '../configs/prisma-client.config';

export const authService = {
  async register({
    firstName,
    lastName,
    email,
    password,
    birthDate,
    role,
    hireAt,
  }: Omit<Staff, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>) {
    await prisma.staff.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        birthDate,
        role,
        hireAt,
      },
    });
  },
};
