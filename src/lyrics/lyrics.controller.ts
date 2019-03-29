import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common'
import { LyricsService } from './lyrics.service'

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  async getLyrics() {
    return await this.lyricsService.getLyrics()
  }

  @Get(':lyricID')
  async getLyric(@Param('lyricID') lyricID) {
    return await this.lyricsService.getLyric(lyricID)
  }

  @Post()
  async addLyric(@Body() createLyricDTO: any) {
    return await this.lyricsService.addLyric(createLyricDTO)
  }

  @Delete()
  async deleteLyric(@Query() query) {
    return await this.lyricsService.deleteLyrics(query.lyricID)
  }
}
