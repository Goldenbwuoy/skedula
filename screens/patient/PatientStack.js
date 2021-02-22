import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PatientHome from "./PatientHome";

const Stack = createStackNavigator();

const PatientStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Patient Home" component={PatientHome} />
    </Stack.Navigator>
  );
};

export default PatientStack;
