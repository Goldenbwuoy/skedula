import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const ProfileStack = () => {
	const navigation = useNavigation();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "",
					headerLeft: () => (
						<Ionicons
							name="chevron-back-circle"
							size={30}
							color="white"
							style={{ marginHorizontal: 20 }}
							onPress={() => navigation.goBack()}
						/>
					),
					headerRight: () => (
						<MaterialCommunityIcons
							name="account-edit"
							size={30}
							color="white"
							style={{ marginHorizontal: 20 }}
						/>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

export default ProfileStack;
