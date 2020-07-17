export const updateForm = (payload) => async (dispatch) => {
  dispatch({ type: 'UPDATE_FORM', payload });
};

export const updateCVV = (payload) => async (dispatch, getState) => {
  const { cvv } = getState().form;
  const { value } = payload;
  await dispatch({
    type: 'UPDATE_CVV',
    payload: {
      type: 'cvv',
      value: Number.isInteger(Number(value)) ? value : cvv,
    },
  });

  const { cvv: newCvv } = getState().form;
  dispatch({
    type: 'UPDATE_CARD',
    payload: {
      type: 'cvv',
      value: newCvv
        .split('')
        .map(() => '*')
        .join(''),
    },
  });
};

export const updateCard = (payload) => async (dispatch) => {
  dispatch({ type: 'UPDATE_CARD', payload });
};

export const toggleFocus = (payload) => async (dispatch) => {
  dispatch({ type: 'TOGGLE_FOCUS', payload });
};

export const updateFocusInfo = (payload) => async (dispatch, getState) => {
  const { focusInfo } = getState().card;
  dispatch({
    type: 'UPDATE_FOCUS_INFO',
    payload: {
      old: focusInfo.new,
      new: payload,
    },
  });
};
