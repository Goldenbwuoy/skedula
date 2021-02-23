import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
