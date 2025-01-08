import { IsString } from "class-validator";

export class CreateManagerDto {
    @IsString()
    user: string;

    @IsString()
    pass: string;
}
