import "react-native-gesture-handler";
import React, { useEffect, useReducer, useMemo } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  authReducer,
  authInitialState,
  AUTH_ACTIONS,
} from "./context/reducers/authReducer";
import {
  profileReducer,
  profileInitialState,
  PROFILE_ACTIONS,
} from "./context/reducers/profileReducer";
import AuthContext from "./context/AuthContext";
import ProfileContext from "./context/ProfileContext";
import RootStack from "./screens/auth/RootStack";
import PatientScreen from "./screens/patient/PatientHome";
import DoctorScreen from "./screens/doctor/DoctorScreen";

export default function App() {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profileInitialState
  );

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#fff",
      background: "#455a64",
      card: "#1c313a",
      text: "#fff",
      border: "#1c313a",
      notification: "rgb(254,92,92)",
    },
  };

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    let auth;

    try {
      auth = await AsyncStorage.getItem("auth");
    } catch (err) {
      console.log(err);
    }

    authDispatch({ type: AUTH_ACTIONS.RESTORE_USER, auth: JSON.parse(auth) });
  };

  const authContextValue = useMemo(() => {
    return { state: authState, dispatch: authDispatch };
  }, [authState, authDispatch]);

  const profileContextValue = useMemo(() => {
    return { profileState, profileDispatch };
  }, [profileState, profileDispatch]);

  return (
    <AuthContext.Provider value={authContextValue}>
      <ProfileContext.Provider value={profileContextValue}>
        <NavigationContainer theme={MyTheme}>
          {authState.auth == null ? (
            <RootStack />
          ) : (
            <>
              {authState.auth.user.role == "Patient" ? (
                <PatientScreen />
              ) : (
                <DoctorScreen />
              )}
            </>
          )}
        </NavigationContainer>
      </ProfileContext.Provider>
    </AuthContext.Provider>
  );
}
