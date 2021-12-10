import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appointments from "./Appointments";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";

const Stack = createStackNavigator();

const AppointmentsStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					shadowColor: colors.card, //iOS
					elevation: 0, // Android
				},
				headerTitleStyle: {
					fontFamily: "Montserrat_600SemiBold",
				},
			}}
		>
			<Stack.Screen
				name="Appointments"
				component={Appointments}
				options={{
					title: "Appointments",
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
		</Stack.Navigator>
	);
};

export default AppointmentsStack;
