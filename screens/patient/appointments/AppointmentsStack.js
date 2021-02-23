import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appointments from "./Appointments";

const Stack = createStackNavigator();

const AppointmentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Appointments" component={Appointments} />
    </Stack.Navigator>
  );
};

export default AppointmentsStack;
