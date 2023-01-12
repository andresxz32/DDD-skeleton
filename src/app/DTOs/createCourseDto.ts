import { IsNotEmpty, IsString, IsUUID } from 'class-validator';



export class CreateCourseDto {
    @IsUUID('4',)
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}