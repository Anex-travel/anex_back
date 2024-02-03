/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MediaService } from "./media.service";
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('File upload')
@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiCreatedResponse({ description: 'File uploaded successfully' })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPhoto(@UploadedFile() file: string) {
    return await this.mediaService.createFile(file);
  }

  @ApiOkResponse({ description: 'File deleted successfully' })
  @Delete()
  async deleteFile(@Body() file: any) {
    return await this.mediaService.deleteFile(file?.file);
  }
}