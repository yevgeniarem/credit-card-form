const initialState = {
  number: '',
  numberMask: '#### #### #### ####',
  name: 'FULL NAME',
  month: 'MM',
  year: 'YY',
  cvv: '',
  cardType: 'visa',
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
