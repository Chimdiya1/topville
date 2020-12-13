import { combineReducers } from 'redux';
import listingsReducer from './listings/listings.reducer';
import blogsReducer from './blogs/blogs.reducer';

const rootReducer = combineReducers({
  listings: listingsReducer,
  blogs: blogsReducer,
});
export default rootReducer;
