import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Doctors from "./Doctors";

const Stack = createStackNavigator();

const DoctorsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Doctors" component={Doctors} />
    </Stack.Navigator>
  );
};

export default DoctorsStack;
