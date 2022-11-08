import {MODE} from './action';
const initialState = {
    modeState: null
};
function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case MODE:
      return {...state, modeState: action.payload};

      default:
        return state;
    }
  }
  export default HomeReducer;