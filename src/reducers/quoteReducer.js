// reducers/quoteReducer.js
const initialState = {
    quote: '',
    tags: [],
    bookmarks: [],
  };
  
  const quoteReducer = (state = initialState, action) => {
    // Handle different actions to update the state accordingly
    switch (action.type) {
      case 'SET_QUOTE':
        return { ...state, quote: action.payload };
      case 'SET_TAGS':
        return { ...state, tags: action.payload };
      case 'SET_BOOKMARKS':
        return {
            ...state,
            bookmarks: [...state.bookmarks, action.payload],
          };
      default:
        return state;
    }
  };
  
  export default quoteReducer;
  