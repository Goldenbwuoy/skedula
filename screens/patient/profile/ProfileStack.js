import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { useTheme } from "@react-navigation/native";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, //iOS
            elevation: 0, // Android
          },
          headerRight: () => (
            <MaterialCommunityIcons
              name="account-edit"
              size={30}
              color="white"
              style={{ marginHorizontal: 20 }}
              onPress={() => navigation.navigate("EditProfile")}
            />
          ),
        }}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
