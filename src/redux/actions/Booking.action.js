import * as types from "../actionTypes/actionTypes.booking";
import * as bookingAPI from '../../api'; 


// Create Booking
export const addBooking = (bookingData) => async (dispatch) => {
  dispatch({ type: types.CREATE_BOOKING_REQUEST });
  try {
    const response = await bookingAPI.addBooking(bookingData);
    dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.CREATE_BOOKING_FAILURE, payload: error.response.data.message });
    console.log(error.response)
  }
};

// Fetch All Bookings
export const getBookingsData = () => async (dispatch) => {
  dispatch({ type: types.FETCH_ALL_BOOKINGS_REQUEST });
  try {
    const response = await bookingAPI.getBookingsData();
    dispatch({ type: types.FETCH_ALL_BOOKINGS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.FETCH_ALL_BOOKINGS_FAILURE, payload: error.response.data.message });
  }
};

// Fetch Booking By ID
export const getBookingById = (id) => async (dispatch) => {
  dispatch({ type: types.FETCH_BOOKING_BY_ID_REQUEST });
  try {
    const response = await bookingAPI.getBookingById(id);
    dispatch({ type: types.FETCH_BOOKING_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.FETCH_BOOKING_BY_ID_FAILURE, payload: error.response.data.message });
  }
};

// Update Booking
export const updateBooking = (id, updatedData) => async (dispatch) => {
  dispatch({ type: types.UPDATE_BOOKING_REQUEST });
  try {
    const response = await bookingAPI.updateBooking(id, updatedData);
    dispatch({ type: types.UPDATE_BOOKING_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: types.UPDATE_BOOKING_FAILURE, payload: error.response.data.message });
  }
};

// Delete Booking
export const deleteBooking = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_BOOKING_REQUEST });
  try {
    await bookingAPI.deleteBooking(id);
    dispatch({ type: types.DELETE_BOOKING_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: types.DELETE_BOOKING_FAILURE, payload: error.response.data.message });
  }
};
