import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appointments from "./Appointments";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native-animatable";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const AppointmentsStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Appointments"
				component={Appointments}
				options={{
					title: "Appointments",
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

export default AppointmentsStack;
