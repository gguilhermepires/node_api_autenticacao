import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { prismaClient } from '../../../database/prismaClient';
import HttpException from '../../../errors/HttpException';
import { ApiResponse } from '../../../infrastructure/apiResponse';

const handler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (email === '')
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Email can not be empty');
  if (password === '')
    throw new HttpException(StatusCodes.BAD_REQUEST, 'password can not be empty');

  let userDatabase = await prismaClient.user.findFirst({
    where: { email }
  });

  if (userDatabase != null) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'User already on system');
  }

  try {
    const sql = prismaClient.user.create({
      data: {
        email,
        password
      }
    });

   [userDatabase] = await prismaClient.$transaction([sql]);
   userDatabase.password = '';

   res.status(StatusCodes.OK).json(
    ApiResponse.create({
      code: StatusCodes.OK,
      message: '',
      data: userDatabase,
    }),
  );
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json(
      ApiResponse.create({
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: 'Could not create user',
      }),
    );
  }
};

export default handler;
