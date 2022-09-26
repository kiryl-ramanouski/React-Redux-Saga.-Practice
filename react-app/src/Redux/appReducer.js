import { SHOW_LOADER } from './types';
import { HIDE_LOADER } from './types';
import { SHOW_ALERT } from './types';
import { HIDE_ALERT } from './types';

const initialState = {
  loading: false,
  alert: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    default:
      return state;
  }
};
