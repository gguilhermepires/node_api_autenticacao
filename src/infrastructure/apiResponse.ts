interface IApiResponse {
  code: number;
  message: string;
  data?: any | null;
}

export class ApiResponse {
  static create({
    code = 500,
    message = '',
    data = null,
  }: IApiResponse): IApiResponse {
    const response: IApiResponse = {
      code,
      message,
      data,
    };
    return response;
  }
}
