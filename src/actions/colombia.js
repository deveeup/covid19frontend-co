export const addDataCol = (payload) => {
  return {
    type: "ADD_DATA",
    payload,
  };
};

/**
 * Action for remove policy basic data to store
 */
export const removeDataCol = () => {
  return {
    type: "REMOVE_DATA",
  };
};
