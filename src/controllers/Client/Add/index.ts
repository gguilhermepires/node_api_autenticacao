import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import HttpException from '../../../errors/HttpException';

import { ApiResponse } from '../../../infrastructure/apiResponse';

async function createProgrammeInOneLogin(programme: any) {
  console.log(programme);
}

async function createProgrammeInDatabase(programme: any) {
  console.log(programme);
}

async function getProgrammeFromDatabase(programmePayload: any) {
  console.log(programmePayload);
}

async function getProgrammeFromOneLogin(programmePayload: any) {
  console.log(programmePayload);
}

function createProgrammeFromPayload(payload: any) {
  console.log(payload);
  return {}
}

function createProgrameResponse(programmeDatabase: any, programmeOneLogin: any) {
  console.log(programmeDatabase);
  console.log(programmeOneLogin);
}

const handler = async (req: Request, res: Response): Promise<void> => {

  const programme: any = createProgrammeFromPayload(req.body);

  const programmeDatabase = await getProgrammeFromDatabase(programme);
  const programmeOneLogin = await getProgrammeFromOneLogin(programme);

  if (programmeDatabase == null && programmeOneLogin == null) {
    createProgrammeInOneLogin(programme);
    createProgrammeInDatabase(programme);
  }
  else if (programmeDatabase == null && programmeOneLogin != null) {
    createProgrammeInDatabase(programme);
  }
  else if (programmeDatabase != null && programmeOneLogin != null) {
    throw new HttpException(StatusCodes.BAD_REQUEST, 'Programme exists already');
  }
  else if (programmeDatabase != null && programmeOneLogin == null) {
    createProgrammeInOneLogin(programme);
  }

  res.status(StatusCodes.OK).json(
    ApiResponse.create({
      code: StatusCodes.OK,
      message: 'addProgramme',
      data: createProgrameResponse(programmeDatabase, programmeOneLogin),
    }),
  );
};

export default handler;
