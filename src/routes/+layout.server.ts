import type { RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent): Promise<{ recipes: Recipe[] }> {
  const response = await event.fetch('/api/recipes')
  return { recipes: response.ok ? await response.json() : [] }
}
