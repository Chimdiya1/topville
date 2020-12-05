const INITIAL_STATE = {
    listings: [],
    searchResult:[]
};

const listingsReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
      case 'LOAD_LISTINGS':
        return {
          ...state,
          listings: action.payload,
        };
      case 'LOAD_SEARCH_RESULT':
        return {
          ...state,
          searchResult: action.payload,
        };
      default:
        return state;
    }
}
export default listingsReducer