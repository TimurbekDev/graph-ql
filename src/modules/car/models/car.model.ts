import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class Car {
  @Field(()=>ID)
  id:number;

  @Field(()=>String)
  brand: string;

  @Field(()=>Int)
  year: number;

  @Field(()=>Float)
  price: number
}
