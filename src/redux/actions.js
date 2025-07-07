export const addToHistory = (calculation) => ({
  type: 'ADD_TO_HISTORY',
  payload: calculation,
});

export const clearHistory = () => ({
  type: 'CLEAR_HISTORY',
});
