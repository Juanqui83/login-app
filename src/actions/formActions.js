export const setFormData = (data) => {
    return {
      type: 'SET_FORM_DATA',
      payload: data,
    };
  };
  
  export const clearFormData = () => {
    return {
      type: 'CLEAR_FORM_DATA',
    };
  };
  