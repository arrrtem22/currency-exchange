import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Country } from '../../common/entity/country.entity';
import { CountryResolver } from './country.resolver';
import { CountryService } from './country.service';

@Module({
  imports: [TypeOrmModule.forFeature([Country])],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
