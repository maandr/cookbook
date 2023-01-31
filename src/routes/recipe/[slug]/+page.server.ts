import { error, type RequestEvent } from '@sveltejs/kit'

export async function load(event: RequestEvent): Promise<Recipe> {
  if (!event.params.slug) throw error(404, 'Not Found')
  const response = await event.fetch('/api/recipes/' + event.params.slug)
  if (!response.ok) throw error(response.status, response.statusText)
  else return await response.json()
}
