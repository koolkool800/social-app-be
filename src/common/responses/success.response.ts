export class SuccessResponse {
  static call(data: null | any = null, message: string = 'Successfully') {
    return {
      result: true,
      message,
      data,
    };
  }
}
