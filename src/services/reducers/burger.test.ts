import {
  burgerReducer,
  burgerReducerInitialState as initialState,
} from "./burger";
import {
  ADD_INGREDIENT,
  CLEAR_SELECTED_INGREDIENTS,
  DECREASE_COUNT,
  GET_INGREDIENTS_FAILURE,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INCREASE_COUNT,
  REMOVE_INGREDIENT,
  UPDATE_INGREDIENTS,
} from "../action-types";
import {
  addIngredient,
  decreaseCount,
  increaseCount,
  removeIngredient,
} from "../helpers";
import { IBurgerIngredient } from "../models";
import { TBurgerActions } from "../actions";

const INDEX_MOCK = 0;
const AT_INDEX_MOCK = 0;
const ERROR_MOCK: Error = {
  name: "ERROR MOCK",
  message: "Something went wrong",
};
const INGREDIENT_MOCK = {
  calories: 420,
  carbohydrates: 53,
  fat: 24,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  name: "Краторная булка N-200i",
  price: 1255,
  proteins: 80,
  type: "bun",
  __v: 0,
  _id: "60d3b41abdacab0026a733c6",
  uniqueID: "60d3b41abdacab0026a733c6",
};

describe("burger reducer", () => {
  it("should return initial state", () => {
    expect(burgerReducer(initialState, {} as TBurgerActions)).toEqual(
      initialState
    );
  });

  it("should handle GET_INGREDIENTS_REQUEST", () => {
    expect(
      burgerReducer(initialState, {
        type: GET_INGREDIENTS_REQUEST,
      })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      burgerReducer(initialState, {
        type: GET_INGREDIENTS_SUCCESS,
        data: [INGREDIENT_MOCK],
      })
    ).toEqual({
      ...initialState,
      ingredients: [INGREDIENT_MOCK],
      loading: false,
      error: null,
    });
  });

  it("should handle GET_INGREDIENTS_FAILURE", () => {
    expect(
      burgerReducer(initialState, {
        type: GET_INGREDIENTS_FAILURE,
        error: ERROR_MOCK,
      })
    ).toEqual({
      ...initialState,
      loading: false,
      error: ERROR_MOCK,
    });
  });

  it("should handle ADD_INGREDIENT", () => {
    const burger = burgerReducer(initialState, {
      type: ADD_INGREDIENT,
      ingredient: INGREDIENT_MOCK,
    });

    burger.selectedIngredients = burger.selectedIngredients.map(
      (item: IBurgerIngredient) => {
        delete (item as any).uniqueID;
        return item;
      }
    );

    const burgerExpected = {
      ...initialState,
      selectedIngredients: addIngredient(
        INGREDIENT_MOCK,
        initialState.selectedIngredients
      ).map((item) => {
        delete (item as any).uniqueID;
        return item;
      }),
    };

    expect(burger).toEqual(burgerExpected);
  });

  it("should handle REMOVE_INGREDIENT", () => {
    expect(
      burgerReducer(initialState, {
        type: REMOVE_INGREDIENT,
        ingredient: INGREDIENT_MOCK,
      })
    ).toEqual({
      ...initialState,
      selectedIngredients: removeIngredient(
        INGREDIENT_MOCK,
        initialState.selectedIngredients
      ),
    });
  });

  it("should handle UPDATE_INGREDIENTS", () => {
    const selectedIngredients = [INGREDIENT_MOCK];
    selectedIngredients.splice(INDEX_MOCK, 1);
    selectedIngredients.splice(AT_INDEX_MOCK, 0, INGREDIENT_MOCK);

    expect(
      burgerReducer(initialState, {
        type: UPDATE_INGREDIENTS,
        ingredient: INGREDIENT_MOCK,
        index: INDEX_MOCK,
        atIndex: AT_INDEX_MOCK,
      })
    ).toEqual({
      ...initialState,
      selectedIngredients,
    });
  });

  it("should handle CLEAR_SELECTED_INGREDIENTS", () => {
    burgerReducer(initialState, {
      type: ADD_INGREDIENT,
      ingredient: INGREDIENT_MOCK,
    });

    expect(
      burgerReducer(initialState, {
        type: CLEAR_SELECTED_INGREDIENTS,
      })
    ).toEqual({
      ...initialState,
      selectedIngredients: [],
    });
  });

  it("should handle INCREASE_COUNT", () => {
    expect(
      burgerReducer(initialState, {
        type: INCREASE_COUNT,
        ingredient: INGREDIENT_MOCK,
      })
    ).toEqual({
      ...initialState,
      ingredients: increaseCount(INGREDIENT_MOCK, initialState.ingredients),
    });
  });

  it("should handle DECREASE_COUNT", () => {
    expect(
      burgerReducer(initialState, {
        type: DECREASE_COUNT,
        ingredient: INGREDIENT_MOCK,
      })
    ).toEqual({
      ...initialState,
      ingredients: decreaseCount(INGREDIENT_MOCK, initialState.ingredients),
    });
  });
});
