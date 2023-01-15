import { error } from '@sveltejs/kit'

export function load({ params }): { slug: string } {
  if (params.slug) return { slug: params.slug }
  throw error(404, 'Not Found')
}
