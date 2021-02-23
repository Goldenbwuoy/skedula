export const AUTH_ACTIONS = {
  RESTORE_USER: "RESTORE_USER",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

export const authInitialState = {
  auth: null,
};

export const authReducer = (prevState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.RESTORE_USER:
      return {
        ...prevState,
        auth: action.auth,
      };

    case AUTH_ACTIONS.SIGN_IN:
      return {
        ...prevState,
        auth: action.auth,
      };
    case AUTH_ACTIONS.SIGN_OUT:
      return {
        ...prevState,
        auth: null,
      };
  }
};
