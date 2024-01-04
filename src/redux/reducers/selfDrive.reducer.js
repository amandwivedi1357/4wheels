import * as actionTypes from "../actionTypes/selfDrive.actionTypes";

const initialState = {
  totalCars:null,
  totalFleets:null,
  fleets: [],
  cars: [],
  loading: false,
  error: false,
};

const SelfReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case actionTypes.GET_TOTAL_FLEETS_REQUEST:

      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.GET_TOTAL_FLEETS_SUCCESS : 
    
      return {
        ...state,
        loading:false,
        error:false,
        totalFleets:payload.totalFleets,
      }
    case actionTypes.GET_TOTAL_FLEETS_FAILURE:
      return {
        ...state,
        loading:false,
        error:true
      }
    case actionTypes.GET_TOTAL_CARS_REQUEST:

      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.GET_TOTAL_CARS_SUCCESS : 
    
      return {
        ...state,
        loading:false,
        error:false,
        totalCars:payload.totalCars,
      }
    case actionTypes.GET_TOTAL_CARS_FAILURE:
      return {
        ...state,
        loading:false,
        error:true
      }
    case actionTypes.GET_ALL_CARS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.GET_ALL_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        fleets: payload,
        error: false,
      };
    case actionTypes.GET_ALL_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.GET_FLEET_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.GET_FLEET_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: payload,
        error: false,
      };
    case actionTypes.GET_FLEET_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.GET_CAR_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.GET_CAR_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: payload,
        error: false,
      };
    case actionTypes.GET_CAR_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_FLEET_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case actionTypes.ADD_FLEET_SUCCESS:
      return {
        ...state,
        loading: false,
        fleets: payload,
        cars: payload,
        error: false,
      };
    case actionTypes.ADD_FLEET_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case actionTypes.ADD_CARS_TO_FLEET_REQUEST : 
      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.ADD_CARS_TO_FLEET_SUCCESS : 
      return {
        ...state,
        loading:false,
        error:false,
        cars:payload,
        fleets:payload,

      }
    case actionTypes.ADD_CARS_TO_FLEET_FAILURE:
      return {
        ...state,
        loading:false,
        error:true
      }
    default:
      return state;
  }
};

export default SelfReducer;
