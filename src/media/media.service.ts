/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as uuid from 'uuid';
import * as path from 'node:path';
import * as fs from 'node:fs';

@Injectable()
export class MediaService {
  async createFile(file: any): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }
      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      console.log(fileName);
      return fileName;
    } catch (error) {
      new HttpException(
        'Faylni yozishda xato',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteFile(oldLink: string): Promise<boolean> {
    try {
      const filePath = path.resolve(__dirname, '..', 'static' + '/' + oldLink);
      if (!fs.existsSync(filePath)) {
        return false;
      }
      fs.unlinkSync(filePath);
      return true;
    } catch (error) {
      throw new HttpException(
        'Faylni o`zgartirishda hatolik',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}