// eslint-disable-next-line import/prefer-default-export
export const updateForm = (payload) => async (dispatch) => {
  await dispatch({ type: 'UPDATE_FORM', payload });
  dispatch({ type: 'UPDATE_CARD', payload });
};

export const toggleFocus = (payload) => async (dispatch) => {
  dispatch({ type: 'TOGGLE_FOCUS', payload });
};
