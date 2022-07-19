const CategoryReducer = (state, action) => {
  switch (action.type) {
    case "PLAY_NOW":
      return {
        ...state,
        category: [...state.category, action.payload]
      };

    case "TAKE_QUIZ":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default CategoryReducer;
