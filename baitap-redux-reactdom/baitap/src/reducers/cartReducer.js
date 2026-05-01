export const cartReducer = (state = [], action) => {
  const newState = [...state];
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
      const itemUpdate = newState.find(item => action.id===item.id);
      itemUpdate.quantity++;
      console.log(itemUpdate.quantity);
    default:
      return state;
  }
}