export const updateForm = (payload) => async (dispatch) => {
  await dispatch({ type: 'UPDATE_FORM', payload });
  dispatch({ type: 'UPDATE_CARD', payload });
};

export const updateCard = (payload) => async (dispatch) => {
  dispatch({ type: 'UPDATE_CARD', payload });
};

export const updateNumber = (payload) => async (dispatch) => {
  await dispatch({ type: 'UPDATE_NUMBER', payload });
  dispatch({ type: 'UPDATE_CARD', payload });
};

export const toggleFocus = (payload) => async (dispatch) => {
  dispatch({ type: 'TOGGLE_FOCUS', payload });
};
