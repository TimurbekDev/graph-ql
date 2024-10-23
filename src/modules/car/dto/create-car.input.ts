import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {
  @Field(()=>String)
  brand: string;

  @Field(()=>Int)
  year: number;

  @Field(()=>Float)
  price: number
}
