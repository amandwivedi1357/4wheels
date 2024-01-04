import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import cheuffeurReducer from './reducers/cheuffeurDrive.reducer.js'
import {thunk} from "redux-thunk"
import bookingReducer from "./reducers/booking.reducer.js";
import SelfReducer from "./reducers/selfDrive.reducer.js";
 
  
  const rootReducer = combineReducers({
    data: cheuffeurReducer,
    booking:bookingReducer,
    selfData:SelfReducer
  });
  
  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
   const store = legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
  );
  export default store