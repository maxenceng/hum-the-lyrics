import { Controller, Get, Param, Post, Body, Delete, Query, Put } from '@nestjs/common'
import { LyricsService } from './lyrics.service'
import { CreateLyricsDto } from './dto/create-lyrics.dto'
import { Lyrics } from './lyrics.interface'

@Controller('lyrics')
export class LyricsController {
  constructor(private lyricsService: LyricsService) {}

  @Get()
  async getLyrics(): Promise<Lyrics[]> {
    return await this.lyricsService.getAllLyrics()
  }

  @Get('/:lyricsText')
  async getLyricsByText(@Param('lyricsText') lyricsText: string): Promise<Lyrics[]> {
    return await this.lyricsService.getLyricsByText(lyricsText)
  }

  @Post()
  async addLyric(@Body() createLyricsDto: CreateLyricsDto): Promise<Lyrics>  {
    return await this.lyricsService.addLyrics(createLyricsDto)
  }

  @Put(':lyricsID')
  async updateLyric(@Param('lyricsID') lyricsID: string, @Body() createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyricsService.updateLyrics(lyricsID, createLyricsDto)
  }

  @Delete()
  async deleteLyric(@Query() query): Promise<Lyrics> {
    return await this.lyricsService.deleteLyrics(query.lyricsID)
  }
}
