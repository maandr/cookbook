import type { RequestEvent } from '@sveltejs/kit'
import { writeFileSync } from 'fs'

export async function POST(event: RequestEvent) {
  try {
    const payload: ImageUploadRequestPayload = JSON.parse(await event.request.text())
    writeFileSync(`static/${payload.fileName}`, payload.dataBase64Encoded, 'base64')
    return new Response(null, {
      status: 200
    })
  } catch (e: unknown) {
    console.error('failed to save image', e)
    return new Response(null, {
      status: 500
    })
  }
}
