import { createStore, applyMiddleware } from 'redux';

import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import orderReducer from './orderReducer'
import visibModalReducer from './visibModalReducer'
import BeerReducer from './BeerReducer'




const rootReducer = combineReducers({
    beer:BeerReducer,
    order:orderReducer,
    visMod:visibModalReducer,
  

    
})

export const  store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));







