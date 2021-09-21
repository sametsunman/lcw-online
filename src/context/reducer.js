function reducer(state, action) {

    switch (action.type) {
      case 'SET_STATE_FROM_STORAGE':
        return action.payload ? action.payload : state;
      case 'CREATE_NEW_LINK':
          let newLink = action.payload;
          newLink.id = state.products.length> 0 ? (state.products[state.products.length - 1].id+1) : 1;
          newLink.updatedDate = new Date ();
          newLink.vote = 0;
         return { ...state, products: [...state.products, newLink] }
      case 'REMOVE_LINK':
        return { ...state, products: state.products.filter((link) => link.id !== action.payload) }
      case 'VOTE_LINK':
          let votedLink = state.products.find((link) => link.id === action.payload.id);
          votedLink.vote=votedLink.vote+action.payload.vote;
          votedLink.updatedDate= new Date();
          return { ...state, products: state.products.map(link => link.id === action.payload.id ? votedLink : link)};
      default:
        return state;
    }
  

  }
  
  export default reducer;