import * as mongoose from 'mongoose'

export const lyricsSchema = new mongoose.Schema({
  artist: String,
  title: String,
  lyrics: String,
})