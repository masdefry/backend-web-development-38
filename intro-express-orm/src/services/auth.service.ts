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
    const findStaffByEmail = await prisma.staff.findFirst({
      where: {
        email: email
      }
    })

    if(findStaffByEmail) throw new Error('Email staff already registered')

    await prisma.staff.create({
      data: {
        firstName,
        lastName,
        email,
        password,
        birthDate: new Date(birthDate),
        role,
        hireAt: new Date(hireAt),
      },
    });
  },
};
