export abstract class BaseResponse {
  public abstract toJSON(): Record<string, any>;
}
