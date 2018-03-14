import actionTypes from './actionTypes';

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

const saveResult = result => ({
  type: actionTypes.STORE_RESULT,
  result,
});

export const storeResult = result => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const prevCounter = getState().ctr.counter;
      console.log(prevCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};
