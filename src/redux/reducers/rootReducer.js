import { combineReducers } from 'redux';

import form from './form';
import card from './card';

const rootReducer = combineReducers({ form, card });

export default rootReducer;
