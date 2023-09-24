import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Country, ExchangeOffice, Rate, Exchange } from '../../common';
import { CountryService } from '../country/country.service';
import { ExchangeService } from '../exchange/exchange.service';
import { RateService } from '../rate/rate.service';
import { ExchangeOfficeResolver } from './exchange-office.resolver';
import { ExchangeOfficeService } from './exchange-office.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExchangeOffice, Rate, Exchange, Country]),
  ],
  providers: [
    ExchangeOfficeResolver,
    ExchangeOfficeService,
    RateService,
    ExchangeService,
    CountryService,
  ],
})
export class ExchangeOfficeModule {}
