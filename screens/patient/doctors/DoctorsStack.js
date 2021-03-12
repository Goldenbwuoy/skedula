import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Doctors from "./Doctors";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import NotificationsIcon from "../../../components/NotificationsIcon";
import { Ionicons } from "@expo/vector-icons";

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

export default DoctorsStack;
