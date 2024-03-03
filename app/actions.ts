'use server'

import fs from 'fs'
import { nanoid } from 'nanoid'
import ffmpeg from 'fluent-ffmpeg'

export async function createScreenshots(formData: FormData) {
  const requestUrl = formData.get('requestUrl') as string
  const startTime = formData.get('startTime') as string

  const id = nanoid()
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
