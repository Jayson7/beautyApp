// reducers.js
const initialState = {
  refresh: null,
  access: null,
  username: null,
  password: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_AUTH_DATA":
      return {
        ...state,
        refresh: action.payload.refreshToken,
        access: action.payload.token,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default authReducer;
