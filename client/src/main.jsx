import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import guitarReducer from './features/Colors'
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer:{
guitar_set : guitarReducer
  }
},
// applyMiddleware(thunk)
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
