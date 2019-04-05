import { Controller, Get, Param, Post, Body, Delete, Query, Put } from '@nestjs/common'
import { LyricsService } from './lyrics.service'
import { CreateLyricsDto } from './dto/create-lyrics.dto'
import { Lyrics } from './lyrics.interface'

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  async getLyrics(): Promise<Lyrics[]> {
    return await this.lyricsService.getLyrics()
  }

  @Get(':lyricID')
  async getLyric(@Param('lyricID') lyricID: number): Promise<Lyrics> {
    return await this.lyricsService.getLyric(lyricID)
  }

  @Post()
  async addLyric(@Body() createLyricsDto: CreateLyricsDto): Promise<Lyrics>  {
    return await this.lyricsService.addLyric(createLyricsDto)
  }

  @Put(':lyricID')
  async updateLyric(@Param('lyricID') lyricID: number, @Body() createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyricsService.updateLyric(lyricID, createLyricsDto)
  }

  @Delete()
  async deleteLyric(@Query() query): Promise<Lyrics> {
    return await this.lyricsService.deleteLyrics(query.lyricID)
  }
}
