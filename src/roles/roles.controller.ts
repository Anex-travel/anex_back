/* eslint-disable prettier/prettier */
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Role')
@Controller('role')
export class RolesController {
  constructor(private readonly userService: RolesService) {}

  @ApiCreatedResponse({ description: 'Role created successfully' })
  @Post()
  create(@Body() createUserDto: CreateRoleDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOkResponse({ description: 'List of Roles' })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOkResponse({ description: 'View role by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOkResponse({ description: 'Role edited successfully' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateRoleDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOkResponse({ description: 'Role deleted successfully' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
