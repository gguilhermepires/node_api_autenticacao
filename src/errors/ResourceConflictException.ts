import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import HttpException from './HttpException';

class ResourceConflictException extends HttpException {
  constructor() {
    super(StatusCodes.CONFLICT, ReasonPhrases.CONFLICT);
  }
}

export default ResourceConflictException;
