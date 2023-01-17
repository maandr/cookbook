interface Recipe {
  slug: string
  title: string
  tags: string[]
  imagePath: string
  amountOfServings: number
  amountOfMinutesRequired: number
  containsGluten: boolean
  containsMeat: boolean
  containsLactose: boolean
  containsFish: boolean
  containsAlcohol: boolean
  ingrediences: Ingredience[]
  instructions: string[]
}

interface Ingredience {
  quantity: Quantity
  name: string
  required: boolean
}

interface Quantity {
  amount: number
  unit: string
}

type RecipeDictionary = {
  [id: string]: Recipe
}

interface MenuEntry {
  isActive: boolean
  title: string
  href: string
  onClick?: () => Void
}

interface RecipeFilter {
  mustContainIngrediences: string[]
  mustHaveTags: string[]
  meatAllowed: boolean
  glutenAllowed: boolean
  lactoseAllowed: boolean
  fishAllowed: boolean
  alcoholAllowed: boolean
}

type Pair<T> = {
  key: T
  value: T
}

type Tab = any // eslint-disable-line @typescript-eslint/no-explicit-any
type Panel = any // eslint-disable-line @typescript-eslint/no-explicit-any
interface TabsContext {
  registerTab(tab: Tab)
  registerPanel(panel: Panel)
  selectTab(tab: Tab)
  selectedTab: Writable<Tab>
  selectedPanel: Writable<Panel>
}
