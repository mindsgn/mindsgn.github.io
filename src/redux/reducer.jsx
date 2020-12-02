import {
  POST,
  NEXT,
  ISAUTH,
  BOOK,
} from './constant';

const initialState = {
  name: '',
  email: '',
  date: '',
  isBooking: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        isBooking: action.payload.isBooking,
      };
    case POST:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case NEXT:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
