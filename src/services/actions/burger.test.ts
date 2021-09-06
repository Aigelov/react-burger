import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import thunk from "redux-thunk";
import * as burgerActions from "./burger";
import {
  ADD_INGREDIENT,
  CLEAR_SELECTED_INGREDIENTS,
  DECREASE_COUNT,
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  INCREASE_COUNT,
  REMOVE_INGREDIENT,
  UPDATE_INGREDIENTS,
} from "../action-types";
import { TBurgerReducerInitialState } from "../reducers/burger";
import { AppDispatch } from "../../index";

const middlewares = [thunk];
const mockStore = configureMockStore<TBurgerReducerInitialState, AppDispatch>(
  middlewares
);

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

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_INGREDIENTS_SUCCESS when fetching ingredients has been done", () => {
    fetchMock.getOnce("https://norma.nomoreparties.space/api/ingredients", {
      body: { data: [INGREDIENT_MOCK] },
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: GET_INGREDIENTS_REQUEST },
      { type: GET_INGREDIENTS_SUCCESS, data: [INGREDIENT_MOCK] },
    ];

    const store = mockStore({ ingredients: [] } as any);

    return store.dispatch<any>(burgerActions.getIngredients()).then(() => {
      // Возвращаем асинхронный экшен
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates ADD_INGREDIENT when adding ingredient", () => {
    const expectedAction = [
      { type: ADD_INGREDIENT, ingredient: INGREDIENT_MOCK },
    ];
    const store = mockStore({ selectedIngredients: [] } as any);

    store.dispatch(burgerActions.addIngredient(INGREDIENT_MOCK));

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("creates REMOVE_INGREDIENT when removing ingredient", () => {
    const expectedAction = [
      { type: REMOVE_INGREDIENT, ingredient: INGREDIENT_MOCK },
    ];
    const store = mockStore({ selectedIngredients: [INGREDIENT_MOCK] } as any);

    store.dispatch(burgerActions.removeIngredient(INGREDIENT_MOCK));

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("creates UPDATE_INGREDIENTS when moving ingredient inside constructor", () => {
    const indexMock = 0;
    const atIndexMock = 0;

    const expectedAction = [
      {
        type: UPDATE_INGREDIENTS,
        ingredient: INGREDIENT_MOCK,
        index: indexMock,
        atIndex: atIndexMock,
      },
    ];
    const store = mockStore({ selectedIngredients: [INGREDIENT_MOCK] } as any);

    store.dispatch(
      burgerActions.updateIngredients(INGREDIENT_MOCK, indexMock, atIndexMock)
    );

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("creates CLEAR_SELECTED_INGREDIENTS after making order", () => {
    const expectedAction = [{ type: CLEAR_SELECTED_INGREDIENTS }];
    const store = mockStore({
      selectedIngredients: [INGREDIENT_MOCK],
      ingredients: { INGREDIENT_MOCK },
    } as any);

    store.dispatch(burgerActions.clearBurgerConstructor());

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("creates INCREASE_COUNT when drag and drop ingredient at constructor", () => {
    const expectedAction = [
      { type: INCREASE_COUNT, ingredient: INGREDIENT_MOCK },
    ];
    const store = mockStore({ ingredients: [INGREDIENT_MOCK] } as any);

    store.dispatch(burgerActions.increaseCount(INGREDIENT_MOCK));

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });

  it("creates DECREASE_COUNT when remove ingredient at constructor", () => {
    const expectedAction = [
      { type: DECREASE_COUNT, ingredient: INGREDIENT_MOCK },
    ];
    const store = mockStore({ ingredients: [INGREDIENT_MOCK] } as any);

    store.dispatch(burgerActions.decreaseCount(INGREDIENT_MOCK));

    // Возвращаем экшен
    expect(store.getActions()).toEqual(expectedAction);
  });
});
