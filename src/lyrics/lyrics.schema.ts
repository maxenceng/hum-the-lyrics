import * as mongoose from 'mongoose'

export const lyricsSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
})