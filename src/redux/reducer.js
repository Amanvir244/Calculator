const initialState = {
  history: [],
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        history: [action.payload, ...state.history],
      };
    case 'CLEAR_HISTORY':
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export default calculatorReducer;
