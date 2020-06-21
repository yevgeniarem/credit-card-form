const initialState = {
  number: '',
  name: '',
  month: '',
  year: '',
  cvv: '',
  isCVVFocused: false,
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return { ...state, [action.payload.type]: action.payload.value };
    case 'TOGGLE_FOCUS':
      return { ...state, isCVVFocused: action.payload };
    default:
      return state;
  }
};

export default form;
