import { combineReducers } from 'redux';
import guitarReducer from './Colors';
import cartReducer from './CartReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  guitar_set: guitarReducer,
  cart_items: cartReducer,
  user_data : userReducer
});

export default rootReducer;