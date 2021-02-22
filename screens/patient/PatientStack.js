import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PatientHome from "./PatientHome";

const PatientStack = createStackNavigator();

const PatientStackScreen = () => {
  return (
    <PatientStack.Navigator>
      <PatientStack.Screen name="Patient Home" component={PatientHome} />
    </PatientStack.Navigator>
  );
};

export default PatientStackScreen;
