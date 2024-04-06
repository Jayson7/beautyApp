// reducers.js
const initialState = {
  refreshToken: null,
  token: null,
  username: null,
  password: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_DATA":
      return {
        ...state,
        refreshToken: action.payload.refreshToken,
        token: action.payload.token,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default authReducer;
