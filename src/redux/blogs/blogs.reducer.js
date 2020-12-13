const INITIAL_STATE = {
  blogs: [],
};

const blogsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOAD_BLOGS':
      return {
        ...state,
        blogs: action.payload,
      };
    default:
      return state;
  }
};
export default blogsReducer;
