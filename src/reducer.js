export const initialState = {
  basket: [],
  //   user: null,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
export default reducer;
