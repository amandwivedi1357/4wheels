// actions.js
import * as actionTypes from '../actionTypes/cheuffeurDrive.actionTypes';
import * as api from '../../api'; 
export const getAllCars = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_CARS_REQUEST });

  try {
    const response = await api.getAllCars();
    dispatch({ type: actionTypes.GET_ALL_CARS_SUCCESS, payload: response.data });  
 } catch (error) {
    dispatch({ type: actionTypes.GET_ALL_CARS_FAILURE, payload: error.message }); 

}
};
export const getFleetById = (id) => async (dispatch) => {
    dispatch({ type: actionTypes.GET_FLEET_BY_ID_REQUEST });
  
    try {
      const response = await api.getFleetById(id);
      dispatch({ type: actionTypes.GET_FLEET_BY_ID_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.GET_FLEET_BY_ID_FAILURE, payload: error.message }); 
    }
  };
  
  export const getCarById = (fleetId, carId) => async (dispatch) => {
    console.log(1)
    dispatch({ type: actionTypes.GET_CAR_BY_ID_REQUEST });
  
    try {
      const response = await api.getCarById(fleetId, carId);
      dispatch({ type: actionTypes.GET_CAR_BY_ID_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.GET_CAR_BY_ID_FAILURE, payload: error.message }); 
    }
  };
  
  export const addFleet = (fleetData) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_FLEET_REQUEST });
  
    try {
      const response = await api.addFleet(fleetData);
      dispatch({ type: actionTypes.ADD_FLEET_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.ADD_FLEET_FAILURE, payload: error.message }); 
    }
  };
  
  export const addCarsToFleetType = (fleetId, car) => async (dispatch) => {
    dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_REQUEST });
  
    try {
      const response = await api.addCarsToFleetType(fleetId, car);
      dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_SUCCESS, payload: response.data });  
    } catch (error) {
      dispatch({ type: actionTypes.ADD_CARS_TO_FLEET_FAILURE, payload: error.message }); 
      console.log(error.message)
    }
  };


  export const updateFleet = (fleetId, fleetType) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_FLEET_REQUEST });
  
    try {
      const response = await api.updateFleet(fleetId, fleetType);
      dispatch({ type: actionTypes.UPDATE_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.UPDATE_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const updateCarInFleet = (fleetId, carId, updatedData) => async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_REQUEST });
  
    try {
      const response = await api.updateCarInFleet(fleetId, carId, updatedData);
      dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.UPDATE_CAR_IN_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const deleteFleet = (fleetId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_FLEET_REQUEST });
  
    try {
      const response = await api.deleteFleet(fleetId);
      dispatch({ type: actionTypes.DELETE_FLEET_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: actionTypes.DELETE_FLEET_FAILURE, payload: error.message });
    }
  };
  
  export const deleteCarInFleet = (fleetId, carId) => async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_REQUEST });
  
    try {
      const response = await api.deleteCarInFleet(fleetId, carId);
      dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_SUCCESS, payload: response.data });
      
    } catch (error) {
      dispatch({ type: actionTypes.DELETE_CAR_IN_FLEET_FAILURE, payload: error.message });
      
    }
  };
  
  export const getTotalCars = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_TOTAL_CARS_REQUEST });
    
    try {
      const response = await api.getTotalCars();
      dispatch({ type: actionTypes.GET_TOTAL_CARS_SUCCESS, payload: response.data });
      
    } catch (error) {
      dispatch({ type: actionTypes.GET_TOTAL_CARS_FAILURE, payload: error.message });
    }
  };


  export const getTotalFleets = () => async (dispatch) => {
    dispatch({ type: actionTypes.GET_TOTAL_FLEETS_REQUEST });
    
    try {
      const response = await api.getTotalFleets();
      dispatch({ type: actionTypes.GET_TOTAL_FLEETS_SUCCESS, payload: response.data });
      
    } catch (error) {
      dispatch({ type: actionTypes.GET_TOTAL_FLEETS_FAILURE, payload: error.message });
    }
  };
