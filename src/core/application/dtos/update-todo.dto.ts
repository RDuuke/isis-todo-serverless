import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateTodoDto {
    @IsString({ message: 'Text must be a string' })
    @IsNotEmpty({ message: 'Text is required' })
    text!: string;

    @IsBoolean({ message: 'Completed must be a boolean' })
    @IsNotEmpty({ message: 'Completed is required' })
    completed!: boolean;
}