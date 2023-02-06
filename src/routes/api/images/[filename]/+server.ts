import appCtx from '$lib/server/appCtx'
import type { RequestEvent } from '@sveltejs/kit'
import { readFileSync, existsSync } from 'fs'
import { normalize } from 'path'

export async function GET(event: RequestEvent) {
  try {
    const { config } = await appCtx()
    if (!event.params.filename) {
      return new Response(null, {
        status: 404
      })
    } else {
      const filePath = normalize(config.imageDir + event.params.filename)
      if (!existsSync(filePath)) return new Response(null, { status: 404 })
      const contents = readFileSync(filePath)
      return new Response(contents, {
        headers: {
          'Content-Type': 'image/jpeg'
        },
        status: 200
      })
    }
  } catch (e: unknown) {
    console.error('failed to save image', e)
    return new Response(null, {
      status: 500
    })
  }
}
