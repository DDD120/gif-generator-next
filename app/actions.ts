'use server'

import fs from 'fs'
import ffmpeg from 'fluent-ffmpeg'

interface CreateScreenshotsProps {
  requestUrl: string
  startTime: string
  id: string
}

export async function createScreenshots({
  requestUrl,
  startTime,
  id,
}: CreateScreenshotsProps) {
  const dir = `screenshots/${id}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  ffmpeg(requestUrl)
    .screenshots({
      timestamps: [startTime],
      folder: dir,
    })
    .on('end', () => {
      console.log('end')
    })
    .on('error', (err) => {
      console.log('error', err)
    })
}
