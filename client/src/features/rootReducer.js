import { combineReducers } from 'redux';
import guitarReducer from './Colors';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  guitar_set: guitarReducer,
  cart_items: cartReducer
});

export default rootReducer;