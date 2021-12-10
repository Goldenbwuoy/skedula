import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Appointments from "./Appointments";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";
import NotificationsIcon from "../../../components/NotificationsIcon";

const Stack = createStackNavigator();

const AppointmentsStack = () => {
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
