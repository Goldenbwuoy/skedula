import "react-native-gesture-handler";
import React, { useEffect, useReducer, useMemo } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { reducer, initialState, ACTIONS } from "./context/reducer";
import AuthContext from "./context/AuthContext";
import RootStack from "./screens/auth/RootStack";
import PatientStack from "./screens/patient/PatientStack";
import DoctorStack from "./screens/doctor/DoctorStack";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      <NavigationContainer>
        {state.user == null ? (
          <RootStack />
        ) : (
          <>
            {state.user.user.role == "Patient" ? (
              <PatientStack />
            ) : (
              <DoctorStack />
            )}
          </>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
