import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString({ message: 'Text must be a string' })
    @IsNotEmpty({ message: 'Text is required' })
    text!: string;

    @IsOptional()
    @IsBoolean()
    completed?: boolean;
}