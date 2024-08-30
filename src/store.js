import { createStore, combineReducers } from 'redux';
import formReducer from './reducers/formReducer';  // Asegúrate de que la ruta sea correcta

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
