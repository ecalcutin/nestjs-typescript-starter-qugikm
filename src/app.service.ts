import { Injectable } from '@nestjs/common';
import { Scope } from '@nestjs/common/interfaces/scope-options.interface';
import { BaseService } from './abstract-service';

@Injectable({
  // scope: Scope.REQUEST,
})
export class AppService extends BaseService {
  constructor() {
    super({
      foo: 'foo',
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
