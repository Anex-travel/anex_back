/* eslint-disable prettier/prettier */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

type payload = {
  phone: string;
  role_id: 3 | 2 | 1;
  sub: number;
  iat: number;
  exp: number;
};

@Injectable()
export class globalGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    try {
      const id = +req.params.id || +req.body.user_id;
      console.log(id);

      const authHeader = req.headers.authorization;
      if (!authHeader) {
        throw new UnauthorizedException('Unauthorized');
      }
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];
      if (!token && !bearer) {
        throw new UnauthorizedException('Unauthorized');
      }

      const user: payload = this.jwtService.verify(token);
      switch (user.role_id) {
        case 2: {
          return true;
          break;
        }
        case 1: {
          return true;
          break;
        }
        case 3: {
          return true;
          break;
        }
      }
    } catch (e) {
      console.log(e);
      throw new UnauthorizedException('Unauthorized!');
    }
  }
}
