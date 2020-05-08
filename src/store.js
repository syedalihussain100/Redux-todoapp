import { createStore, combineReducers } from 'redux';
import inputReducer from './reducer/inputReducer';
import mainReducer from './reducer/mainReducer';
const store = createStore(
  combineReducers({
    input: inputReducer,
    main: mainReducer
  })
);

export default store;
