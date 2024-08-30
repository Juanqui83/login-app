const initialState = {
    user: '',
    email: '',
    password: '',
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FORM_DATA':
        return {
          ...state,
          ...action.payload,
        };
      case 'CLEAR_FORM_DATA':
        return initialState;
      default:
        return state;
    }
  };
  
  export default formReducer;
  