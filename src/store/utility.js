export const updateObject = (prevObject, updatedValues) => {
  return {
    ...prevObject,
    ...updatedValues,
  };
};
