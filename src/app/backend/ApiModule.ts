import { Module } from '@nestjs/common';
import { ApplicationModule } from '../../Contexts/app/ApplicationModule';
import { CoursePutController } from './Courses/CoursePutController';
import { StatusGetController } from './StatusGetController';

@Module({
    controllers: [
        StatusGetController,
        CoursePutController
    ],
    imports: [ApplicationModule],

})
export class ApiModule { }