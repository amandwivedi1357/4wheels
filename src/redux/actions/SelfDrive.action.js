// actions.js
import * as actionTypes from '../actionTypes/selfDrive.actionTypes';
import * as api from '../../api'; 
export const getAllSelfCars = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_CARS_REQUEST });

  try {
    const response = await api.getAllSelfCars();
    console.log(response)
    dispatch({ type: actionTypes.GET_ALL_CARS_SUCCESS, payload: response.data });  
 } catch (error) {
    dispatch({ type: actionTypes.GET_ALL_CARS_FAILURE, payload: error.message }); 

}
};
export const getSelfFleetById = (id,page,limit) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_FLEET_BY_ID_REQUEST });
  
    try {
      const response = await api.getSelfFleetById(id,page,limit);
      dispatch({ type: actionTypes.GET_FLEET_BY_ID_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.GET_FLEET_BY_ID_FAILURE, payload: error.message }); 
    }
  };
  
  export const getSelfCarById = (fleetId, carId) => async (dispatch) => {
    console.log(1)
    dispatch({ type: actionTypes.GET_CAR_BY_ID_REQUEST });
  
    try {
      const response = await api.getSelfCarById(fleetId, carId);
      dispatch({ type: actionTypes.GET_CAR_BY_ID_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.GET_CAR_BY_ID_FAILURE, payload: error.message }); 
    }
  };
  
  export const addSelfFleet = (fleetData) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_FLEET_REQUEST });
  
    try {
      const response = await api.addSelfFleet(fleetData);
      dispatch({ type: actionTypes.ADD_FLEET_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.ADD_FLEET_FAILURE, payload: error.message }); 
    }
  };
  
  export const addSelfCarsToFleetType = (fleetId, cars) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_REQUEST });
  
    try {
      const response = await api.addSelfCarsToFleetType(fleetId, cars);
      dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_FAILURE, payload: error.message }); 
    }
  };


  export const updateSelfFleet = (fleetId, fleetType) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_FLEET_REQUEST });
  
    try {
      const response = await api.updateSelfFleet(fleetId, fleetType);
      dispatch({ type: actionTypes.UPDATE_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.UPDATE_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const updateSelfCarInFleet = (fleetId, carId, properties) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_REQUEST });
  
    try {
      const response = await api.updateSelfCarInFleet(fleetId, carId, properties);
      dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const deleteSelfFleet = (fleetId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_FLEET_REQUEST });
  
    try {
      const response = await api.deleteSelfFleet(fleetId);
      dispatch({ type: actionTypes.DELETE_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.DELETE_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const deleteSelfCarInFleet = (fleetId, carId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_REQUEST });
  
    try {
      const response = await api.deleteSelfCarInFleet(fleetId, carId);
      dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const getTotalSelfCars = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_TOTAL_CARS_REQUEST });
    
    try {
      const response = await api.getTotalSelfCars();
      dispatch({ type: actionTypes.GET_TOTAL_CARS_SUCCESS, payload: response.data });
      
    } catch (error) {
      dispatch({ type: actionTypes.GET_TOTAL_CARS_FAILURE, payload: error.message });
    }
  };


  export const getTotalSelfFleets = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_TOTAL_FLEETS_REQUEST });
    
    try {
      const response = await api.getTotalFleets();
      dispatch({ type: actionTypes.GET_TOTAL_FLEETS_SUCCESS, payload: response.data });
      
    } catch (error) {
      dispatch({ type: actionTypes.GET_TOTAL_FLEETS_FAILURE, payload: error.message });
    }
  };
