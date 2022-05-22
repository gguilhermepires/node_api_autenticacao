import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ApiResponse } from '../../../infrastructure/apiResponse';

function extractDataFromPayload(payload: any) {
  console.log(payload);
}
const handler = async (req: Request, res: Response): Promise<void> => {

  const obj = extractDataFromPayload(req.body);

  res.status(StatusCodes.OK).json(
    ApiResponse.create({
      code: StatusCodes.OK,
      message: 'deleteProgramme',
      data: null,
    }),
  );
};

export default handler;
