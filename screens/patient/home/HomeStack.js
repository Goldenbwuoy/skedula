import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import Home from "./Home";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { Ionicons } from "@expo/vector-icons";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";

const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
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
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
