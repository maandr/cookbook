import { error } from '@sveltejs/kit'

export function couldNotLoadData() {
  return error(500, {
    message: 'Daten konnten nicht geladen werden. Versuche es etwas später nochmal.',
    availableActions: [Action.Refresh]
  })
}

export function recipeDoesNotExist() {
  return error(404, {
    message:
      'Das gewünschte Rezept konnt nicht gefunden werden. Schau am besten nochmal in die Übersicht.',
    availableActions: [Action.Back]
  })
}

export enum Action {
  Back = 'back',
  Refresh = 'refresh'
}
