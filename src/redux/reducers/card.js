const initialState = {
  number: '#### #### #### ####',
  name: 'FULL NAME',
  month: 'MM',
  year: 'YY',
  cvv: '',
  cardType: 'visa',
  isCardFlipped: false,
  isInputFocused: false,
  numberAnimations: [],
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
