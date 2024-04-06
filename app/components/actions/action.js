// actions.js
export const setAuthData = (refreshToken, token, username, password) => ({
  type: "SET_AUTH_DATA",
  payload: { refreshToken, token, username, password },
});
