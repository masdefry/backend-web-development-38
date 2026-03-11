import { addMonths } from 'date-fns';
import { Member } from '../../generated/prisma/client';
import prisma from '../configs/prisma-client.config';

type GetAllMembersQuery = {
  page: number;
  limit: number;
  search?: string;
  status?: string;
};

export const memberService = {
  async getAll({ page, limit, search, status }: GetAllMembersQuery) {
    const offset = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.OR = [
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
        { id: search },
      ];
    }
    if (status) {
      where.status = status;
    }
    where.deletedAt = null;

    const members = await prisma.member.findMany({
      where,
      skip: offset,
      take: limit,
    });

    const totalMembers = await prisma.member.count({
      where 
    })
    
    return {
      members, 
      totalData: totalMembers, 
      totalPage: Math.ceil(totalMembers/limit)
    };
  },
  async create({
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
  }: Pick<
    Member,
    'firstName' | 'lastName' | 'address' | 'email' | 'phoneNumber'
  >) {
    await prisma.member.create({
      data: {
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        expirationDate: addMonths(new Date(), 3),
      },
    });
  },
};
