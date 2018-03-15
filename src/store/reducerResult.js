import actionTypes from './actionTypes';
import { updateObject } from './utility';

const initialState = {
  results: [],
};

const storeResult = (state, action) => {
  return updateObject(state, {
    results: state.results.concat({ id: new Date(), value: action.result }),
  });
};

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    result => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
    default:
      return state;
  }
};
