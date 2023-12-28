import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import cheuffeurReducer from './reducers/cheuffeurDrive.reducer.js'
import {thunk} from "redux-thunk"
 
  
  const rootReducer = combineReducers({
    data: cheuffeurReducer,
  });
  
  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
   const store = legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
  );
  export default store