function reducer(state, action) {

  switch (action.type) {
    case 'SET_STATE_FROM_STORAGE':
      return action.payload ? action.payload : state;
      case 'ADD_TO_FAVORITES':
        let favIndex = state.favorites.findIndex((fav) => fav.id === action.payload.id);
        return favIndex === -1
          ? { ...state, favorites: [...state.favorites, action.payload] }
          : state;
      case 'REMOVE_FROM_FAVORITES':
        return { ...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload.id) }
      case 'ADD_TO_CART':
        let basketIndex = state.orderCart.findIndex((order) => order.id === action.payload.id);
        return basketIndex === -1
          ? { ...state, orderCart: [...state.orderCart, action.payload] }
          : state;
      case 'DELETE_CART':
        return { ...state, orderCart: state.orderCart.filter((order) => order.id !== action.payload.id) }
        case 'REMOVE_FROM_CART':
          return { ...state, orderCart: state.orderCart.filter((order) => order.id !== action.payload.id) }
    default:
      return state;
  }


}

export default reducer;

