import { appConfig } from '@config';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CarModule } from '@modules';
import { PrismaModule } from './prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load : [appConfig]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver : ApolloDriver,
      autoSchemaFile : join(process.cwd(),"src/schema.gql"),
      playground : false,
      plugins:[ApolloServerPluginLandingPageLocalDefault()]
    }),
    CarModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
