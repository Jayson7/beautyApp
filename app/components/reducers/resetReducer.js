import { RESET_STATE } from "../actions/action";

const initialState = {
  // Define your initial state variables here
  refreshToken: null,
  token: null,
  username: "",
  password: "",
  // Add other state variables as needed
};

const ResetReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STATE:
      return initialState;
    // Add other cases to handle other actions
    default:
      return state;
  }
};

export default ResetReducer;
