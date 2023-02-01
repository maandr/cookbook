import type { RequestEvent } from '@sveltejs/kit'
import { writeFileSync } from 'fs'

export async function POST(event: RequestEvent) {
  const payload: ImageUploadRequestPayload = JSON.parse(await event.request.text())
  console.log(payload)

  writeFileSync(`static/${payload.fileName}`, payload.dataBase64Encoded, 'base64')
  return new Response(null, {
    status: 200
  })
}
