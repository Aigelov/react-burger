export interface IBurgerIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile?: string;
  image_large?: string;
  count?: number;
  __v?: number;
  uniqueID: string;
}

export interface IConstructedBurger {
  _id: string;
  isLocked?: boolean;
  handleClose?: () => void;
  uniqueID: string;
  text: string;
  price: number;
  thumbnail: string;
}

export interface IConstructedBurgerBun {
  _id: string;
  type: "bottom" | "top";
  isLocked?: boolean;
  handleClose?: () => void;
  uniqueID: string;
  text: string;
  price: number;
  thumbnail: string;
}

export interface IBurgerIngredientsTabs {
  bunRef: { current: HTMLDivElement | null };
  sauceRef: { current: HTMLDivElement | null };
  mainRef: { current: HTMLDivElement | null };
  currentTab: string;
  tabClickHandler: (
    tab: string,
    tabRef: { current: HTMLDivElement | null }
  ) => void;
}

export interface IBurgerIngredientsTabsContent {
  bunRef: { current: HTMLDivElement | null };
  sauceRef: { current: HTMLDivElement | null };
  mainRef: { current: HTMLDivElement | null };
  ingredientClickHandler: (ingredientId: string) => void;
  scrollContainerRef: { current: HTMLDivElement | null };
  handleScroll: () => void;
}

export interface IBurgerIngredientsCard {
  title: string;
  ingredients: IBurgerIngredient[];
  tabRef: { current: HTMLDivElement | null };
  ingredientClickHandler: (ingredientId: string) => void;
}

export interface IBurgerIngredientsCardItem {
  ingredient: IBurgerIngredient;
  ingredientClickHandler: (ingredientId: string) => void;
}

export interface IIngredientDetailInfo {
  title: string;
  info: number;
}

export interface IBurgerIngredientID {
  id: string;
}

export interface IBurgerIngredientUniqueID {
  uniqueID: string;
}

export interface IBurgerIngredientType {
  type: "bottom" | "top";
}

export interface IBurgerIngredientsSuccess {
  success: boolean;
  data: IBurgerIngredient[];
}
