const initialState = {
  number: '#### #### #### ####',
  amexNumber: '#### ###### ####',
  name: 'FULL NAME',
  month: 'MM',
  year: 'YY',
  cvv: '',
  isCardFlipped: false,
  isInputFocused: false,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      return { ...state, [action.payload.type]: action.payload.value };
    default:
      return state;
  }
};

export default card;
