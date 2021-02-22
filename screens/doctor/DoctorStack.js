import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DoctorHome from "./DoctorHome";

const DoctorStack = createStackNavigator();

const DoctorStackScreen = () => {
  return (
    <DoctorStack.Navigator>
      <DoctorStack.Screen name="Doctor Home" component={DoctorHome} />
    </DoctorStack.Navigator>
  );
};

export default DoctorStackScreen;
