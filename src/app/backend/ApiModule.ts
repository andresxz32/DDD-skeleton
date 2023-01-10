import { Module } from '@nestjs/common';
import { StatusGetController } from './StatusGetController';

@Module({
    controllers: [
        StatusGetController
    ],
    imports: [],

})
export class ApiModule { }