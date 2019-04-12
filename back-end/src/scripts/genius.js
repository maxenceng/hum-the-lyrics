require('dot-env')
const Lyricist = require('lyricist')
const mongoose = require('mongoose')

const lyricist = new Lyricist(process.env.CLIENT_ACCESS_TOKEN)

mongoose.connect('mongodb://localhost/hum', { useNewUrlParser: true })

const lyricsSchema = new mongoose.Schema({
  artist: String,
  title: String,
  lyrics: String,
})

const Lyrics = new mongoose.model('Lyrics', lyricsSchema)

const addSong = async (songID) => {
  const song = await lyricist.song(songID, { fetchLyrics: true })
  const lyrics = new Lyrics({
    lyrics: song.lyrics,
    title: song.title,
    artist: song.primary_artist.name,
  })
  lyrics.save()
  process.exit()
}

addSong(714198)