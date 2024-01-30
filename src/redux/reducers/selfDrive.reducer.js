import * as actionTypes from "../actionTypes/selfDrive.actionTypes";

const initialState = {
  totalSelfCars:null,
  totalSelfFleets:null,
  fleets: [],
  cars: [],
  loading: false,
  error: false,
};
let updatedCars;
let updatedCar;
const SelfReducer = (state = initialState, { type, payload }) => {
  switch (type) {


    case actionTypes.GET_CAR_BY_FUELTYPE_REQUEST:
      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.GET_CAR_BY_FUELTYPE_SUCCESS:
      return {
        ...state,
        loading:false,
        cars:payload,
        error:false,
      }
    case actionTypes.GET_CAR_BY_FUELTYPE_FAILURE:
      return {
        ...state,
        loading:true,
        error:false
      }

    case actionTypes.GET_TOTAL_FLEETS_REQUEST:

      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.GET_TOTAL_FLEETS_SUCCESS: 
    
      return {
        ...state,
        loading:false,
        error:false,
        totalSelfFleets:payload.totalSelfFleets,
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
        totalSelfCars:payload.totalSelfCars,
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
      case actionTypes.UPDATE_CAR_IN_FLEET_REQUEST:
      return {
        ...state,
        loading:true,
        error:false
      }
    case actionTypes.UPDATE_CAR_IN_FLEET_SUCCESS:
      updatedCar = payload;
      updatedCars = state.cars.map((car) =>
        car._id === updatedCar._id ? updatedCar : car
      );
  
      return {
        ...state,
        loading:false,
        error:false,
        cars:updatedCars
      }
    case actionTypes.UPDATE_CAR_IN_FLEET_FAILURE:
      return {
        ...state,
        loading:false,
        error:true,
      }
      case actionTypes.DELETE_CAR_IN_FLEET_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case actionTypes.DELETE_CAR_IN_FLEET_SUCCESS:
        // Update state after successful deletion
        return {
          ...state,
          loading: false,
          fleets: state.fleets.map((fleet) => {
            if (fleet._id === payload.updatedFleetType._id) {
              return payload.updatedFleetType;
            }
            return fleet;
          }),
          error: null,
        };
      case actionTypes.DELETE_CAR_IN_FLEET_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
    default:
      return state;
  }
};

export default SelfReducer;
