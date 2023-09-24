import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Rate, BaseService } from '../../common';

@Injectable()
export class RateService extends BaseService<Rate> {
  constructor(
    @InjectRepository(Rate)
    readonly rateRepository: Repository<Rate>,
  ) {
    super(Rate, rateRepository);
  }
}
