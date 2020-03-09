import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.username
);


const makeSelectLast = () => createSelector(
  selectHome,
  (homeState) => homeState.last
);

export {
  selectHome,
  makeSelectLast,
  makeSelectUsername,
};
