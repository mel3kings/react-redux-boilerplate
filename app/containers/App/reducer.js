import { LOAD_REPOS, LOAD_REPOS_ERROR, LOAD_REPOS_SUCCESS } from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  savednames: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS: {
      return {
        ...state,
        loading: true,
        error: false,
        userData: {
          repositories: false,
        },
      };
    }
    case LOAD_REPOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        userData: {
          repositories: action.repos,
        },
        currentUser: action.username,
        savednames: [...state.savednames, (action.username)]
      };
    }

    case LOAD_REPOS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }
    default:
      return state;
  }
}

export default appReducer;
