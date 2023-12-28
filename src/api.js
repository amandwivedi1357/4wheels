import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; 


const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json', 
  },
});



export const getAllCars = async() => {
    
  return  await api.get('/api/v1/cars');
};

export const getFleetById = async(id) => {
  return await api.get(`/api/v1/cars/fleet/${id}`);
};

export const getCarById = async(fleetId, carId) => {
  return await api.get(`/api/v1/cars/fleet/${fleetId}/car/${carId}`);
};

export const addFleet = async(fleetData) => {
  return await api.post('/api/v1/cars/', fleetData);
};

export const addCarsToFleetType = async(fleetId, cars) => {
    return await api.post(`/api/v1/cars/fleet/${fleetId}/addCars`, { cars });
  };
  
  export const updateFleet = async(fleetId, fleetType) => {
    return await api.patch(`/api/v1/cars/fleet/${fleetId}`, { fleetType });
  };
  
  export const updateCarInFleet = async(fleetId, carId, properties) => {
    return await api.patch(`/api/v1/cars/fleet/${fleetId}/car/${carId}`, { properties });
  };
  
  export const deleteFleet = async(fleetId) => {
    return await api.delete(`/api/v1/cars/fleet/${fleetId}`);
  };
  
  export const deleteCarInFleet = async(fleetId, carId) => {
    return await api.delete(`/api/v1/cars/fleet/${fleetId}/car/${carId}`);
  };
  
  export const getTotalCars = async() => {
    return await api.get('/api/v1/cars/totalcars');
  };
  
  export const getTotalFleets = async() => {
    return await api.get('/api/v1/cars/totalfleets');
  };

export default api;
