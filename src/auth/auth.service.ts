import { HttpException, Injectable } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { ManagerService } from 'src/manager/manager.service';
import passport from 'passport';
import { AppService } from 'src/app.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private managerService: ManagerService, 
        private appService: AppService) {}

    async validateUser({username, password}: authPayloadDto) {
        const user = await this.managerService.findOneByUsername(username);

        if(!await this.appService.compareHash(password, user.pass))
            throw new HttpException('User not found', 404);
        else{
            return {
                'access_token': await this.jwtService.sign({'username': user.user}),
            };
        }
    }
}
