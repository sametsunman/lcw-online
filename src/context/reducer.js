function reducer(state, action) {

    switch (action.type) {
        case 'SET_STATE_FROM_STORAGE':
            return action.payload ? action.payload : state;
        case 'ADD_TO_FAVORITES':
            let favIndex = state.favorites.findIndex((fav) => fav.id === action.payload.id);
            return favIndex === -1 ? {...state, favorites: [...state.favorites, action.payload] } :
                state;
        case 'REMOVE_FROM_FAVORITES':
            return {...state, favorites: state.favorites.filter((fav) => fav.id !== action.payload.id) }
        case 'ADD_TO_CART':
            let newOrder = state.orderCart.find((order) => order.id === action.payload.id);
            if (newOrder) {
                newOrder.count += 1;
                return {...state, orderCart: state.orderCart.map(order => order.id === action.payload.id ? newOrder : order) };
            } else {
                action.payload.count = 1;
                return {...state, orderCart: [...state.orderCart, action.payload] }
            }
        case 'REMOVE_FROM_CART':
            let newOrdr = state.orderCart.find((order) => order.id === action.payload.id);
            newOrdr.count -= 1;
            return {...state, orderCart: state.orderCart.map(order => order.id === action.payload.id ? newOrdr : order) };
        case 'DELETE_CART':
            return {...state, orderCart: state.orderCart.filter((order) => order.id !== action.payload.id) }
        default:
            return state;
    }


}

export default reducer;