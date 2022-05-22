import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ApiResponse } from '../../../infrastructure/apiResponse';

const handler = async (req: Request, res: Response): Promise<void> => {
  res.status(StatusCodes.OK).json(
    ApiResponse.create({
      code: StatusCodes.OK,
      message: 'updateProgramme',
      data: null,
    }),
  );
};

export default handler;
