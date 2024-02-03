import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({
    description: 'Name of the role',
    type: String,
    example: 'USER',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: 'This column for descriptions',
    type: String,
    example: 'You can type here about role permissions',
  })
  readonly description: string;
}
