export abstract class BaseService {
  private readonly param: string;
  constructor(params: { foo: string }) {
    this.param = params.foo || '';
  }

  getParam() {
    return this.param;
  }
}
