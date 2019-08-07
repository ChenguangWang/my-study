export interface Action {
  type: string;
  num: number;
}

// 计数器reducer
export function CounterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case "plus":
      return state + action.num;
    case "minus":
      return state - action.num;
    default:
      return state;
  }
}
