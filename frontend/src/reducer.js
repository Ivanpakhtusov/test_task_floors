const reducer = (state, action) => {
  switch (action.type) {
    case "GET_APARTMENTS":
      return {
        ...state,
        apartments: action.payload,
      };
  }
};
export default reducer;
