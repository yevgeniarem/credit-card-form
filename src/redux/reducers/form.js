const initialState = {
  number: undefined,
  name: undefined,
  date: undefined,
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_NUMBER':
      return { ...state, number: action.payload };
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_TEXT':
      return { ...state, [action.payload.type]: action.payload.value };
    default:
      return state;
  }
};

export default form;
