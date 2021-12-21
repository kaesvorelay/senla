import { createStore } from "redux";

const initialStateCounter = 0;

interface IAction {
  type: string;
  payload?: any;
}

const counterReducer = (state = 0, action: IAction) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
