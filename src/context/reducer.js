export const initialState = {
  incomes: [],
  expenses: [],
};

export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        incomes: [...state.incomes, { ...action.payload, id: Date.now() }],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, { ...action.payload, id: Date.now() }],
      };
    case "DELETE_INCOME":
      return {
        ...state,
        incomes: state.incomes.filter((i) => i.id !== action.payload.id),
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((i) => i.id !== action.payload.id),
      };
    // case 'EDIT_INCOME':
    //     return { ...state, incomes: state.incomes.map(i => i.id === action.payload.id ? { ...i, ...action.payload } : i)
    // };
    // case 'EDIT_EXPENSE':
    //     return { ...state, expenses: state.expenses.map(i => i.id === action.payload.id ? { ...i, ...action.payload } : i )
    // };
    default:
      return state;
  }
}
