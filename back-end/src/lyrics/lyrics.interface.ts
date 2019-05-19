import { Document } from 'mongoose'

export interface Lyrics extends Document {
  readonly artist: string
  readonly title: string
  readonly lyrics: string
}
