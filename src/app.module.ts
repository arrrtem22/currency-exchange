import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import {
  CountryModule,
  ExchangeModule,
  ExchangeOfficeModule,
  RateModule,
} from './feature';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLDirective } from 'graphql/type';
import { DirectiveLocation } from 'graphql/language';
import { AppConfigModule, DbProviderModule } from './common';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION],
          }),
        ],
      },
    }),
    AppConfigModule,
    DbProviderModule,
    ExchangeOfficeModule,
    ExchangeModule,
    CountryModule,
    RateModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
