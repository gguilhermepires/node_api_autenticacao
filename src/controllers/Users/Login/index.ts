import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { User } from 'prisma/prisma-client';

import { prismaClient } from '../../../database/prismaClient';
import HttpException from '../../../errors/HttpException';
import { ApiResponse } from '../../../infrastructure/apiResponse';

async function loginDatabase(email: string, password: string): Promise<User | null> {
  const userDatabase = await prismaClient.user.findFirst({
    where: { email },
  });

  if (userDatabase == null)
    return userDatabase;

  if (userDatabase.password === password) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Password not match');
  }
  userDatabase.password = '';
  return userDatabase;
}

async function loginToOneLogin(email: string, password: string): Promise<User | null> {
  console.log(email,password);
  return null;
}

async function addUserDatabase(user: User): Promise<User> {
  return user;
}

function generateUserForFrontEnd(userDatabase: User | null, userOneLogin: User | null) {
  return {
    userDatabase,
    userOneLogin
  }
}

const handler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  if (email === '')
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Email can not be empty');
  if (password === '')
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Email can not be empty');

  let userDatabase: User | null = await loginDatabase(email, password);
  const userOneLogin: User | null = await loginToOneLogin(email, password);

  if (userDatabase == null && userOneLogin == null) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'User not found');
  }

  if (userDatabase == null && userOneLogin != null) {
    userDatabase = await addUserDatabase(userOneLogin);
  }

  if (userDatabase != null && userOneLogin == null) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Not found user on OneLogin');
  }

  res.status(StatusCodes.OK).json(
    ApiResponse.create({
      code: StatusCodes.OK,
      message: '',
      data: generateUserForFrontEnd(userDatabase, userOneLogin),
    }),
  );
};

export default handler;



