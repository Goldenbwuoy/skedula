import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Doctors from "./Doctors";
import CreateAppointment from "./CreateAppointment";

const Stack = createStackNavigator();

const DoctorsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Doctors" component={Doctors} />
      <Stack.Screen
        name="NewAppointment"
        component={CreateAppointment}
        options={{
          title: "New Appointment",
        }}
      />
    </Stack.Navigator>
  );
};

export default DoctorsStack;
