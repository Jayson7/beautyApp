// store details on login
export const setAuthData = (refreshToken, token, username, password) => ({
  type: "SET_AUTH_DATA",
  payload: { refreshToken, token, username, password },
});

// clear store before or on login

export const RESET_STATE = "RESET_STATE";

export const resetState = () => ({
  type: RESET_STATE,
});
