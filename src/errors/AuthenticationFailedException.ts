import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import HttpException from './HttpException';

class AuthenticationFailedException extends HttpException {
  constructor() {
    super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED);
  }
}

export default AuthenticationFailedException;
