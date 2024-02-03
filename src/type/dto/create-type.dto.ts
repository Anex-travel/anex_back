/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateTypeDto {
  @ApiProperty({
    description: 'Name of tour type',
    type: String,
    example: '15 days',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'Count of tour type days',
    type: Number,
    example: 15,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly days: number;

  @ApiProperty({
    description: 'This is optional column for future features',
    type: Number,
    example: 500000,
  })
  readonly price: number;

  @ApiProperty({
    description: 'This clomnu for descriptions ',
    type: String,
    example: 'This column is necessary to form tour list',
  })
  readonly description: string;
}
