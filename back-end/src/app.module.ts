import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LyricsModule } from './lyrics/lyrics.module'

const isDocker = process.env.DOCKER

@Module({
  imports: [
    LyricsModule,
    MongooseModule.forRoot(`mongodb://${isDocker ? 'mongo' : 'localhost'}/hum`, { useNewUrlParser: true }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
