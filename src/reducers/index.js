// reducer doesnt deppend on any component
// actually other things depending on reducer
// reducer keep the store, that keeps the states updated through actions

const initialState = {
    message: `It's easy to integrate React and Redux, isn't it?`,
  };
  
  function reducer(state = initialState) {
    return state;
  }
  
  export default reducer;