
const initialState = {
    userData: [],
    isFetching: false,
    isError: false
  };
  
  const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER":
           return {...state, isFetching:true, isError: false, userData:[]}
        case "FETCHED_USER":
          return {...state, isFetching:false, isError: false, userData: action.data}
        case "RECEIVE_ERROR":
            return {...state, isFetching:false, isError: true, userData: []}
        default:
          return state;
      }
  };

export default asyncReducer;