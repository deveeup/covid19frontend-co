import { combineReducers } from 'redux';
import colombia from './colombia';
import departaments from './departaments';
export default combineReducers({
  colombia: colombia,
  departaments: departaments
});