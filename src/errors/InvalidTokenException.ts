import { StatusCodes } from 'http-status-codes';

import HttpException from './HttpException';

class InvalidTokenException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, 'Provided token is invalid or has expired');
  }
}

export default InvalidTokenException;
