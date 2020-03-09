import { CHANGE_USERNAME } from './constants';

// The initial state of the App
const initialState = {
  username: '',
  last: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return {
        ...state,
        username: action.name.replace(/@/gi, ''),
        last: 'aasd',
      };
    default:
      return state;
  }
}

export default homeReducer;
