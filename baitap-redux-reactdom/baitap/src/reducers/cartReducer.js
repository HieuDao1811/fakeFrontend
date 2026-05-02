export const cartReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return[
        ...state,
        {
          id: action.id,
          info: action.info,
          quantity: 1
        }
      ];
    case "UPDATE_QUANTITY":
      return state.map(item => {
        if(item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity+1
          }
        }
        else {
          return item;
        }
      })
    default:
      return state;
  }
}