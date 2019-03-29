import { Injectable, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Lyrics } from './lyrics.interface'
import { CreateLyricsDto } from './dto/create-lyrics.dto'

@Injectable()
export class LyricsService {
  constructor(@InjectModel('Lyrics') private readonly lyrics: Model<Lyrics>) {}

  async getLyrics(): Promise<Lyrics[]> {
    return await this.lyrics.find().exec()
  }

  async getLyric(lyricID): Promise<any> {
    return await 1
  }

  async addLyric(createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyrics(createLyricsDto).save()
  }

  async deleteLyrics(lyricID): Promise<any> {
    return await 1
  }
}
