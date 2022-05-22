import { StatusCodes, ReasonPhrases } from 'http-status-codes';

import HttpException from './HttpException';

class NotFoundException extends HttpException {
  constructor() {
    super(StatusCodes.NOT_FOUND, ReasonPhrases.NOT_FOUND);
  }
}

export default NotFoundException;
