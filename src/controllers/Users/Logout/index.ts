import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import HttpException from '../../../errors/HttpException';
import { ApiResponse } from '../../../infrastructure/apiResponse';

async function logoutDatabase(userId: number) {
  console.log(userId);
}

async function logoutOneLogin(userId: number) {
  console.log(userId);
}

const handler = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;

  if (userId === '')
    throw new HttpException(StatusCodes.BAD_REQUEST, 'userId can not be empty');

  await logoutOneLogin(userId);
  await logoutDatabase(userId);

  res
    .status(StatusCodes.OK)
    .json(ApiResponse.create({ code: StatusCodes.OK, message: 'success' }));
};

export default handler;
