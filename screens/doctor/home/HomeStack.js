import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
