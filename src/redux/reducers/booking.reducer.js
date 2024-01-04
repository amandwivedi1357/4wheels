import * as types from "../actionTypes/actionTypes.booking";

const initialState = {
  bookings: [],
  loading: false,
  error: null,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_BOOKING_REQUEST:
    case types.FETCH_ALL_BOOKINGS_REQUEST:
    case types.FETCH_BOOKING_BY_ID_REQUEST:
    case types.UPDATE_BOOKING_REQUEST:
    case types.DELETE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        loading: false,
        error: null,
      };
    case types.FETCH_ALL_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
        error: null,
      };
    case types.FETCH_BOOKING_BY_ID_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
        loading: false,
        error: null,
      };
    case types.UPDATE_BOOKING_SUCCESS:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload._id ? action.payload : booking
        ),
        loading: false,
        error: null,
      };
    case types.DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        bookings: state.bookings.filter((booking) => booking._id !== action.payload),
        loading: false,
        error: null,
      };
    case types.CREATE_BOOKING_FAILURE:
    case types.FETCH_ALL_BOOKINGS_FAILURE:
    case types.FETCH_BOOKING_BY_ID_FAILURE:
    case types.UPDATE_BOOKING_FAILURE:
    case types.DELETE_BOOKING_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
