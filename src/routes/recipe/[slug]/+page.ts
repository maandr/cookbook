import { error, type RequestEvent } from '@sveltejs/kit'

export function load(e: RequestEvent): { slug: string } {
  if (e.params.slug) return { slug: e.params.slug }
  throw error(404, 'Not Found')
}
