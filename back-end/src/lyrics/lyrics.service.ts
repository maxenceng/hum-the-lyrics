import { Injectable, HttpException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Lyrics } from './lyrics.interface'
import { CreateLyricsDto } from './dto/create-lyrics.dto'

@Injectable()
export class LyricsService {
  constructor(@InjectModel('Lyrics') private readonly lyrics: Model<Lyrics>) {}

  async getAllLyrics(): Promise<Lyrics[]> {
    return await this.lyrics.find().exec()
  }

  async getLyrics(lyricsID: string): Promise<Lyrics> {
    return await this.lyrics.findById(lyricsID).exec()
  }

  async addLyrics(createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyrics(createLyricsDto).save()
  }

  async updateLyrics(lyricsID: string, createLyricsDto: CreateLyricsDto): Promise<Lyrics> {
    return await this.lyrics.findByIdAndUpdate(lyricsID, createLyricsDto, { new: true })
  }

  async deleteLyrics(lyricsID: string): Promise<Lyrics> {
    return await this.lyrics.findByIdAndRemove(lyricsID)
  }

  async getLyricsByText(lyricsText: string): Promise<Lyrics> {
    return await this.lyrics.find({ lyrics: { $regex: lyricsText, $options: 'i' }})
  }
}
