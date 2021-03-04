export const PROFILE_ACTIONS = {
  SET_PROFILE: "SET_PROFILE",
  SET_APPOINTMENTS: "SET_APPOINTMENTS",
  ADD_APPOINTMENT: "ADD_APPOINTMENT",
};

export const profileInitialState = {
  profile: null,
  appointments: [],
};

export const profileReducer = (prevState, action) => {
  switch (action.type) {
    case PROFILE_ACTIONS.SET_PROFILE:
      return {
        ...prevState,
        profile: action.profile,
      };

    case PROFILE_ACTIONS.SET_APPOINTMENTS:
      return {
        ...prevState,
        appointments: action.appointments,
      };
    case PROFILE_ACTIONS.ADD_APPOINTMENT:
      return {
        ...prevState,
        appointments: [...prevState.appointments, action.appointment],
      };
  }
};
