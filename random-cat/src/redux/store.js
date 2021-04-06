import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listReducer from './listReducer';
const reducer = combineReducers({
    list: listReducer,
});
const store = createStore(
  reducer, applyMiddleware(thunk)
)
export default store;