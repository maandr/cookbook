export const CATEGORIES = ['salad', 'meal', 'dessert', 'baking', 'drink']

export const DEFAULT_FILTER = {
  mustContainIngrediences: [],
  mustHaveTags: [],
  meatAllowed: true,
  glutenAllowed: true,
  lactoseAllowed: true,
  fishAllowed: true,
  alcoholAllowed: true
}

export const INGREDIENCE_PREFABS: Pair<string>[] = [
  {
    key: 'π',
    value: 'Reis'
  },
  {
    key: 'π',
    value: 'Pasta'
  },
  {
    key: 'π§',
    value: 'Zwiebel'
  },
  {
    key: 'π§',
    value: 'Knoblauch'
  },
  {
    key: 'π«',
    value: 'Paprika'
  },
  {
    key: 'π',
    value: 'Tomate'
  },
  {
    key: 'π₯¦',
    value: 'Brokkoli'
  },
  {
    key: 'π₯',
    value: 'Gurke'
  },
  {
    key: 'π₯¬',
    value: 'Salat'
  },
  {
    key: 'π₯',
    value: 'Ei'
  },
  {
    key: 'π₯',
    value: 'Kartoffel'
  },
  {
    key: 'π ',
    value: 'SΓΌΓkartoffel'
  },
  {
    key: 'π₯',
    value: 'Karotte'
  },
  {
    key: 'π',
    value: 'Pilz'
  },
  {
    key: 'πΆοΈ',
    value: 'Chilli'
  },
  {
    key: 'π§',
    value: 'KΓ€se'
  },
  {
    key: 'π«',
    value: 'Olive'
  },
  {
    key: 'π«',
    value: 'Bohne'
  },
  {
    key: 'π',
    value: 'Aubergine'
  },
  {
    key: 'π₯',
    value: 'Avocado'
  },
  {
    key: 'π',
    value: 'Zitrone'
  },
  {
    key: 'π',
    value: 'Orange'
  },
  {
    key: 'π«',
    value: 'Blaubeere'
  },
  {
    key: 'π₯­',
    value: 'Mango'
  },
  {
    key: 'π',
    value: 'Pfirsich'
  },
  {
    key: 'π',
    value: 'Banane'
  },
  {
    key: 'π',
    value: 'Apfel'
  },
  {
    key: 'π',
    value: 'Birne'
  },
  {
    key: 'π',
    value: 'Erdbeere'
  },
  {
    key: 'π',
    value: 'Kirsche'
  },
  {
    key: 'π₯₯',
    value: 'Kokosnuss'
  },
  {
    key: 'π',
    value: 'Ananas'
  },
  {
    key: 'π·',
    value: 'Wein'
  }
]

export const SLUG_TRANSFORMATIONS: Pair<string>[] = [
  { key: ' ', value: '-' },
  { key: `:`, value: '-' },
  { key: `\\.`, value: '-' },
  { key: 'ΓΌ', value: 'ue' },
  { key: 'Γ€', value: 'ae' },
  { key: 'ΓΆ', value: 'oe' },
  { key: 'Γ', value: 'ss' }
]

export const UNITS: string[] = [
  'Stck.',
  'g',
  'kg',
  'ml',
  'Liter',
  'cl',
  'TL',
  'EL',
  'Tasse',
  'Tropfen'
]
