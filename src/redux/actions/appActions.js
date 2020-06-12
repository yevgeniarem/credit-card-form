export const updateNumber = (payload) => (dispatch) => {
  dispatch({
    type: 'UPDATE_NUMBER',
    payload,
  });
};

export const updateName = (payload) => (dispatch) => {
  dispatch({
    type: 'UPDATE_NAME',
    payload,
  });
};

export const updateText = (payload) => (dispatch) => {
  dispatch({ type: 'UPDATE_TEXT', payload });
};
