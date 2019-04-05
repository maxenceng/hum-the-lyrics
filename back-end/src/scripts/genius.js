require('dot-env')
const Lyricist = require('lyricist')

const lyricist = new Lyricist(process.env.CLIENT_ACCESS_TOKEN)

const test = async () => {
  const song = await lyricist.song(714198, { fetchLyrics: true })
  console.log(song)
}

test()