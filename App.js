import "react-native-gesture-handler";
import React, { useEffect, useReducer, useMemo } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { reducer, initialState, ACTIONS } from "./context/reducer";
import AuthContext from "./context/AuthContext";
import RootStack from "./screens/auth/RootStack";
import PatientScreen from "./screens/patient/PatientHome";
import DoctorScreen from "./screens/doctor/DoctorScreen";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    let user;

    try {
      user = await AsyncStorage.getItem("user");
    } catch (err) {
      console.log(err);
    }

    dispatch({ type: ACTIONS.RESTORE_USER, user: JSON.parse(user) });
  };

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);
  return (
    <AuthContext.Provider value={contextValue}>
      <NavigationContainer theme={MyTheme}>
        {state.user == null ? (
          <RootStack />
        ) : (
          <>
            {state.user.user.role == "Patient" ? (
              <PatientScreen />
            ) : (
              <DoctorScreen />
            )}
          </>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
