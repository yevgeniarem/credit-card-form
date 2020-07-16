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
  focus: '',
  focusInfo: {},
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CARD':
      return { ...state, [action.payload.type]: action.payload.value };
    case 'UPDATE_FOCUS_INFO':
      return {
        ...state,
        focusInfo: action.payload,
      };
    default:
      return state;
  }
};

export default card;
