require('dot-env')
const Lyricist = require('lyricist')
const mongoose = require('mongoose')

const lyricist = new Lyricist(process.env.CLIENT_ACCESS_TOKEN)

mongoose.connect('mongodb://localhost/hum', { useNewUrlParser: true })
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('Connected!')
});

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
  await lyrics.save()
  return song
}

const floor = Number.parseInt(process.argv[2], 10)
const ceiling = Number.parseInt(process.argv[3], 10)

if (process.argv.length <= 2) {
  console.log('Not enough parameters')
  process.exit(0)
}

(async () => {
  // body of the function
  for (let i = floor; i <= ceiling; i++) {
    try {
      const song = await addSong(i)
      console.log(`Added song ${i} : ${song.title} - ${song.primary_artist.name}`)
    } catch (e) {
      console.error(e)
    }
  }
  console.log('For loop finished')
  process.exit(0)
})()
