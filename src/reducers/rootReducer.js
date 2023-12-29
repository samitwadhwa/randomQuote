// reducers/index.js
import { combineReducers } from 'redux';
import quoteReducer from './quoteReducer'; // Your individual reducers

const rootReducer = combineReducers({
  // Combine all reducers here
  quote: quoteReducer, // Example: 'quote' slice of state managed by quoteReducer
  // Add other reducers as needed
});

export default rootReducer;
