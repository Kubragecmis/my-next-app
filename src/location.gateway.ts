import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'file:./dev.db',
    },
  },
});

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class LocationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('sendLocation')
  async handleLocation(
    @MessageBody() data: { latitude: number; longitude: number },
  ) {
    await prisma.location.create({
      data: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });

    console.log('Konum kaydedildi:', data);
  }
}