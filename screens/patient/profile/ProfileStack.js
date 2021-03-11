import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native-animatable";
import NotificationsIcon from "../../../components/NotificationsIcon";

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
						backgroundColor: colors.card,
						shadowColor: colors.card, //iOS
						elevation: 0, // Android
					},
					headerRight: () => (
						<View style={{ marginHorizontal: 20 }}>
							<NotificationsIcon />
						</View>
					),
				}}
			/>
			<Stack.Screen name="EditProfile" component={EditProfile} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
