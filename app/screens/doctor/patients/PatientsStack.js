import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Patients";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";
import NotificationsIcon from "../../../components/NotificationsIcon";

const Stack = createStackNavigator();

const PatientsStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					// shadowColor: colors.card, //iOS
					elevation: 0, // Android
				},
				headerTitleStyle: {
					fontFamily: "Montserrat_600SemiBold",
				},
			}}
		>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "My Patients",
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
		</Stack.Navigator>
	);
};

export default PatientsStack;
