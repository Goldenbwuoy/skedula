import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Doctors from "./Doctors";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { Ionicons } from "@expo/vector-icons";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";

const Stack = createStackNavigator();

const DoctorsStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Doctors"
				component={Doctors}
				options={{
					title: "Doctors",
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

export default DoctorsStack;
