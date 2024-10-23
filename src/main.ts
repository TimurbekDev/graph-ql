import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService)
  await app.listen(
    config.get<number>('app.port'),
    config.get<string>('app.host'),
    ():void=>{
      console.log('Server running on port :',config.get<number>('app.port'));
    }
  );
}
bootstrap();
