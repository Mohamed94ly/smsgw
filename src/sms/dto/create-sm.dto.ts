import { IsOptional } from "class-validator";

export class CreateSmDto {
    msg: string;
    phone: string;

    @IsOptional()
    type: string;
}
