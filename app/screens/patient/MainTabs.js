import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeStack from "./home/HomeStack";
import DoctorsStack from "./doctors/DoctorsStack";
import AppointmentsStack from "./appointments/AppointmentsStack";
import ChatsStack from "./chats/ChatsStack";
import { Platform } from "react-native";

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
				labelStyle: {
					fontFamily: "Montserrat_300Light",

					...Platform.select({
						android: {
							paddingBottom: 5,
						},
					}),
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
				name="ChatsTab"
				component={ChatsStack}
				options={{
					tabBarLabel: "Messages",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome name="wechat" size={size} color={color} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default MainTabs;
