'use server'

import fs from 'fs'
import { nanoid } from 'nanoid'

export async function createScreenshots(formData: FormData) {
  const requestUrl = formData.get('requestUrl')
  const startTime = formData.get('startTime')

  const id = nanoid()
  const dir = `screenshots/${id}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  console.log(requestUrl, startTime, id)
}
