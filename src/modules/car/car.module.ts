import { forwardRef, Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { PrismaModule } from 'src/prisma';

@Module({
  providers: [CarResolver, CarService],
  imports : [forwardRef(()=>PrismaModule)]
})
export class CarModule {}
