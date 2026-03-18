import { Module } from '@nestjs/common';
import { LocationGateway } from './location.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [LocationGateway],
})
export class AppModule {}