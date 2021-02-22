export const ACTIONS = {
  RESTORE_USER: "RESTORE_USER",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

export const initialState = {
  user: null,
};

export const reducer = (prevState, action) => {
  switch (action.type) {
    case ACTIONS.RESTORE_USER:
      return {
        ...prevState,
        user: action.user,
      };

    case ACTIONS.SIGN_IN:
      return {
        ...prevState,
        user: action.user,
      };
    case ACTIONS.SIGN_OUT:
      return {
        ...prevState,
        user: null,
      };
  }
};
