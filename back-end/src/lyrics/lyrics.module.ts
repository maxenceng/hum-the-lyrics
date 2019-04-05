import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LyricsController } from './lyrics.controller'
import { LyricsService } from './lyrics.service'
import { lyricsSchema } from './lyrics.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lyrics', schema: lyricsSchema }])],
  controllers: [LyricsController],
  providers: [LyricsService],
})

export class LyricsModule {}
