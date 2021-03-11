import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import Home from "./Home";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const HomeStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: colors.card,
						shadowColor: colors.card, //iOS
						elevation: 0, // Android
					},
					headerLeft: () => (
						<View style={{ marginHorizontal: 20 }}>
							<Ionicons name="menu" size={24} color="white" />
						</View>
					),
					headerRight: () => (
						<View style={{ marginHorizontal: 20 }}>
							<NotificationsIcon />
						</View>
					),
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
