import { Resolver } from '@nestjs/graphql';

import { BaseResolver, Rate } from '../../common';
import { ExchangeOfficeService } from '../exchange-office/exchange-office.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { RateService } from './rate.service';

@Resolver(() => Rate)
export class RateResolver extends BaseResolver(
  Rate,
  CreateRateDto,
  UpdateRateDto,
  ExchangeOfficeService,
) {
  constructor(private readonly rateService: RateService) {
    super(rateService);
  }
}
