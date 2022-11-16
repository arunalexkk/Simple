import {MODE,LOGIN} from './action';
const initialState = {
    modeState: null,
    userdata:[]
};
function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case MODE:
      return {...state, modeState: action.payload};
      case LOGIN:
        return {...state, userdata: action.payload};
      default:
        return state;
    }
  }
  export default HomeReducer;