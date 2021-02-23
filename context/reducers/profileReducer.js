export const PROFILE_ACTIONS = {
  SET_PROFILE: "SET_PROFILE",
};

export const profileInitialState = {
  profile: null,
};

export const profileReducer = (prevState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE:
      return {
        ...prevState,
        profile: action.profile,
      };
  }
};
