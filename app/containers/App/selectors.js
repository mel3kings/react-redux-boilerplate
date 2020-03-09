import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.currentUser
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.loading
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.error
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.userData.repositories
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);


const makeSelectSavedNames = () => createSelector(
  selectGlobal,
  (globalState) => globalState.savednames
);

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectSavedNames
};
