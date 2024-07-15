

export const MODE = 'MODE';
export const LOGIN = 'LOGIN';

export const change = mode => dispatch => {
  dispatch({
    type: MODE,
    payload: mode,
  });

  // console.log("modeState",mode)
};

export const login = data => dispatch => {
  dispatch({
    type: LOGIN,
    payload: data,
  });

  // console.log("modeState",mode)
};