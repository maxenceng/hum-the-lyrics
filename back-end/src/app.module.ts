import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LyricsModule } from './lyrics/lyrics.module'

@Module({
  imports: [
    LyricsModule,
    MongooseModule.forRoot('mongodb://localhost/hum', { useNewUrlParser: true }),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
