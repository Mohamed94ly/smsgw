import { IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class CreateSmDto {
    @IsNotEmpty()
    msg: string;

    @IsPhoneNumber('LY', {message: 'phone number must be in LY'})
    phone: string;

    @IsOptional()
    type: string;
}
