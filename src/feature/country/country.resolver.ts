import { Resolver } from '@nestjs/graphql';

import { BaseResolver, Country } from '../../common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Resolver(() => Country)
export class CountryResolver extends BaseResolver(
  Country,
  CreateCountryDto,
  UpdateCountryDto,
  CountryService,
) {
  constructor(private readonly countryService: CountryService) {
    super(countryService);
  }
}
