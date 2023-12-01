export class SuccessResponse {
  static call(data: null | any, message: string = 'successfully') {
    return {
      message,
      data,
      result: true,
    };
  }
}
