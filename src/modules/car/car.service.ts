import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarInput, UpdateCarInput } from './dto';
import { PrismaService } from 'src/prisma';

@Injectable()
export class CarService {
  constructor(@Inject(PrismaService) private prisma : PrismaService){}

  async create(createCarInput: CreateCarInput) {
    const car = await this.prisma.car.create({
      data: createCarInput
    })
    return car;
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    const car = await this.prisma.car.findUnique({
      where: { id }
    });

    if(!car)
      throw new NotFoundException('Car not found')

    return car
  }

  async update(id: number, updateCarInput: UpdateCarInput) {

    const updatedCar = await this.prisma.car.update({
      where: { id },
      data: {
        brand:updateCarInput.brand,
        year :updateCarInput.year,
        price:updateCarInput.price
      }
    })

    return updatedCar;
  }

  async remove(id: number) {
    const car = await this.prisma.car.delete({
      where : {
        id
      }
    })
    return car;
  }
}
