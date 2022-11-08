import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import HomeReducer from './reducers';
const rootReducer = combineReducers({
    HomeReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));