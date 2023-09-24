import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService, Exchange } from '../../common';

@Injectable()
export class ExchangeService extends BaseService<Exchange> {
  constructor(
    @InjectRepository(Exchange)
    readonly exchangeRepository: Repository<Exchange>,
  ) {
    super(Exchange, exchangeRepository);
  }
}
