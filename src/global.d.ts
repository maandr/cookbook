/* eslint-disable @typescript-eslint/no-explicit-any */

interface AppConfig {
  database: { connectionUrl: string }
  imageDir: string
}

interface Recipe {
  id: srring
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

interface TagFilter {
  icon: ConstructorOfATypedSvelteComponent
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

interface Result<T> {
  payload: T
}

interface MenuOption {
  icon: ConstructorOfATypedSvelteComponent
  title: string
  onClick: () => void
}

interface ImageUploadRequestPayload {
  fileName: string
  dataBase64Encoded: string
}

type Pair<T> = {
  key: T
  value: T
}

type Tab = any
type Panel = any
interface TabsContext {
  registerTab(tab: Tab)
  registerPanel(panel: Panel)
  selectTab(tab: Tab)
  selectedTab: Writable<Tab>
  selectedPanel: Writable<Panel>
}

interface DragDropContext {
  drag(event: DragEvent, index: number)
  drop(event: DragEvent, toPosition: number)
  dragEnter(event: DragEvent, index: number)
  items: any[]
  isActive: Writable<boolean>
  hoveredPosition: Writable<number>
}

interface SwitchContext {
  selected: any
  select(option: any)
}
