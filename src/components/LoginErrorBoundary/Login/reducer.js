export const initialState = {
  error: null,
  loading: true
};

const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

export const login_success = () => ({
  type: LOGIN_SUCCESS
});

export const login_error = payload => ({
  type: LOGIN_ERROR,
  payload
});

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        error: initialState.error,
        loading: false
      };
    }
    case LOGIN_ERROR: {
      return {
        error: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
};
