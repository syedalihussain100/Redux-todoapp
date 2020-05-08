const inputReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_INPUT':
        return action.value;
      default:
        return state;
    }
  };
  
  export default inputReducer;