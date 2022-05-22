import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const handler = async (req: Request, res: Response): Promise<void> => {

  const services = [
    {name:'api', status:true},
    {name:'database', status:true},
  ];

  res.status(StatusCodes.OK).send(services);
};

export default handler;
