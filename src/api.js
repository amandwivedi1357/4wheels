import axios from 'axios';

// const BASE_URL = 'https://stormy-fish-houndstooth.cyclic.app'; 
const BASE_URL = 'http://localhost:8080'

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
    return await api.post(`/api/v1/cars/fleet/${fleetId}/AddCars`,  cars );
  };
  
  export const updateFleet = async(fleetId, fleetType) => {
    return await api.patch(`/api/v1/cars/fleet/${fleetId}`, { fleetType });
  };
  
  export const updateCarInFleet = async(fleetId, carId, updatedData) => {
    return await api.patch(`/api/v1/cars/fleet/${fleetId}/car/${carId}`,  updatedData );
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

  // booking api's//

  export const addBooking = async(bookingData)=>{
    return await api.post('/api/v2/bookings',bookingData)
  }
  
  export const getBookingsData = async()=>{
    return await api.get('/api/v2/bookings')
  }
  export const getBookingById = async(id)=>{
    return await api.get(`/api/v2/bookings/${id}`)
  }
  export const updateBooking = async(id,updatedData)=>{
    return await api.patch(`/api/v2/bookings/${id}`,updatedData)
  }
  export const deleteBooking = async(id)=>{
    return await api.delete(`/api/v2/bookings/${id}`)
  }
  
//selfDrive 

export const getAllSelfCars = async() => {
    
  return  await api.get('/api/v3/self');
};

export const getSelfFleetById = async(id, page, limit) => {
  return await api.get(`/api/v3/self/fleet/${id}?page=${page}&limit=${limit}`);
};

export const getSelfCarById = async(fleetId, carId) => {
  return await api.get(`/api/v3/self/fleet/${fleetId}/car/${carId}`);
};
export const getSelfCarByFuelType = async(fleetId,fuelType) => {
  return await api.get(`/api/v3/self/fleet/${fleetId}/cars/filter?fuelType=${fuelType}`);
};



export const addSelfFleet = async(fleetData) => {
  return await api.post('/api/v3/self/', fleetData);
};

export const addSelfCarsToFleetType = async(fleetId, cars) => {
    return await api.post(`/api/v3/self/fleet/${fleetId}/addCars`, { cars });
  };
  
  export const updateSelfFleet = async(fleetId, fleetType) => {
    return await api.patch(`/api/v3/self/fleet/${fleetId}`, { fleetType });
  };
  
  export const updateSelfCarInFleet = async(fleetId, carId, properties) => {
    return await api.patch(`/api/v3/self/fleet/${fleetId}/car/${carId}`,  properties );
  };
  
  export const deleteSelfFleet = async(fleetId) => {
    return await api.delete(`/api/v3/self/fleet/${fleetId}`);
  };
  
  export const deleteSelfCarInFleet = async(fleetId, carId) => {
    return await api.delete(`/api/v3/self/fleet/${fleetId}/car/${carId}`);
  };
  
  export const getTotalSelfCars = async() => {
    return await api.get('/api/v3/self/totalcars');
  };
  
  export const getTotalSelfFleets = async() => {
    return await api.get('/api/v3/self/totalfleets');
  };
export default api;
