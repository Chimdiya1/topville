import { combineReducers } from 'redux'
import listingsReducer from './listings/listings.reducer'

 const rootReducer = combineReducers({
    listings:listingsReducer
 })
export default rootReducer