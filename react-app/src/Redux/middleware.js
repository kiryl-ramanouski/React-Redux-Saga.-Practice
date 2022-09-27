import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbidden = ['php', 'spam'];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === CREATE_POST) {
        const found = forbidden.find((word) => word === action.payload.title);
        if (found) {
          return dispatch(showAlert('Forbidden words found, try again.'));
        }
      }
      return next(action);
    };
  };
};
