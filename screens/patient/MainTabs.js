import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import HomeStack from "./home/HomeStack";
import DoctorsStack from "./doctors/DoctorsStack";
import AppointmentsStack from "./appointments/AppointmentsStack";
import ProfileStack from "./profile/ProfileStack";

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
				name="Doctors"
				component={DoctorsStack}
				options={{
					tabBarLabel: "Doctors",
					tabBarIcon: ({ color, size }) => (
						<Fontisto name="doctor" size={size} color={color} />
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
				name="Profile"
				component={ProfileStack}
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Fontisto name="person" size={size} color={color} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default MainTabs;
