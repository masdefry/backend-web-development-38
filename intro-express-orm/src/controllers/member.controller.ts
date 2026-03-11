import { Request, Response } from 'express';
import { memberService } from '../services/member.service';
import { add } from 'date-fns';

export const memberController = {
  async getAll(req: Request, res: Response) {
    const { page = 1, limit = 10, search, status } = req?.query;

    const {members, totalData, totalPage} = await memberService?.getAll({
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      search: search as string,
      status: status as string,
    });

    res.status(200).json({
      success: true, 
      message: 'Get all members successfully', 
      data: {
        totalData, 
        totalPage,
        page, 
        limit, 
        members
      }
    })
  },
  async create(req: Request, res: Response){
    const { firstName, lastName, address, email, phoneNumber } = req?.body; 

    await memberService?.create({
      firstName, 
      lastName, 
      address, 
      email, 
      phoneNumber
    })

    res.status(201).json({
      success: true, 
      message: 'Create member successfully', 
      data: {
        firstName, 
        lastName, 
        address, 
        email, 
        phoneNumber
      }
    })
  }
};
