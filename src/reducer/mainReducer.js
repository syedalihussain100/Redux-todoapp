const mainReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_INPUT':
        return (state = [...state, action.value]);
      case 'REMOVE_INPUT':
        return state.filter(el => el.id !== action.id);
      default:
        return state;
    }
  };
  
  export default mainReducer;
  