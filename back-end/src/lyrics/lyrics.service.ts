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

  async getLyric(lyricID: number): Promise<Lyrics> {
    return await this.lyrics.findById(lyricID).exec()
  }

  async addLyric(createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyrics(createLyricsDto).save()
  }

  async updateLyric(lyricID: number, createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyrics.findByIdAndUpdate(lyricID, createLyricsDto, { new: true })
  }

  async deleteLyrics(lyricID): Promise<Lyrics> {
    return await this.lyrics.findByIdAndRemove(lyricID)
  }
}
