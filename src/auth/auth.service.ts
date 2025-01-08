import { HttpException, Injectable } from '@nestjs/common';
import { authPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';

const fakeUsers = [
    {
        username: 'user1',
        password: 'password1',
    },
    {
        username: 'user2',
        password: 'password2',
    },
]

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    validateUser({username, password}: authPayloadDto) {
        const findUser = fakeUsers.find((user) => user.username === username);
        if (!findUser) return null;
        
        if(password === findUser.password) {
            const { password, ...user } = findUser;

            return {
                'access_token': this.jwtService.sign(user),
            };

        }
    }
}
