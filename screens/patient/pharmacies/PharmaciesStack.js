import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Pharmacies from "./Pharmacies";
import { useTheme } from "@react-navigation/native";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";
import NotificationsIcon from "../../../components/NotificationsIcon";

const Stack = createStackNavigator();

const PharmaciesStack = ({ navigation }) => {
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
				name="Pharmacies"
				component={Pharmacies}
				options={{
					title: "Pharmacies",
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
		</Stack.Navigator>
	);
};

export default PharmaciesStack;
