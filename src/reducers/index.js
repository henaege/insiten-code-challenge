import { combineReducers } from 'redux';
import TargetReducer from './TargetReducer'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  targets: TargetReducer,
  form: formReducer
});

export default rootReducer;
