import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!


const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

const store = configureStore();

export default store;
