import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./home/HomeStack";
import AppointmentsStack from "./appointments/AppointmentsStack";
import PatientsStack from "./patients/PatientsStack";

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
	const { colors } = useTheme();

	return (
		<Tabs.Navigator
			initialRouteName="Home"
			tabBarOptions={{
				activeTintColor: "#009387",
				inactiveTintColor: "rgba(255, 255, 255, 0.7)",
				style: {
					backgroundColor: colors.card,
				},
			}}
		>
			<Tabs.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="home" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="Appointments"
				component={AppointmentsStack}
				options={{
					tabBarLabel: "Appointments",
					tabBarIcon: ({ color, size }) => (
						<Fontisto name="date" size={size} color={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="Patients"
				component={PatientsStack}
				options={{
					tabBarLabel: "Patients",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="people-sharp"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default MainTabs;
