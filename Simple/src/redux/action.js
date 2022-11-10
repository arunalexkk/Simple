

export const MODE = 'MODE';

export const change = mode => dispatch => {
  dispatch({
    type: MODE,
    payload: mode,
  });

  // console.log("modeState",mode)
};

