import { HttpException, Injectable } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { ManagerService } from 'src/manager/manager.service';
import passport from 'passport';

const fakeUsers = [
    {
        username: 'user1',
        password: 'password1',
    },
    {
        username: 'user2',
        password: 'password2',
    },
    {
        username: 'mba',
        password: '9dc8176368f4491fc0a11aa5c58e2903'
    },
]

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private managerService: ManagerService) {}

    async validateUser({username, password}: authPayloadDto) {
        const user = await this.managerService.findOneByUsername(username);

        if(user.pass !== password) {
            throw new HttpException('User not found', 404);
        }else{
            return {
                'access_token': this.jwtService.sign({'username': user.user}),
            };
        }
    }
}
