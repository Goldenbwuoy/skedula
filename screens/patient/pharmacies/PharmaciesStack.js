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
		<Stack.Navigator>
			<Stack.Screen
				name="Pharmacies"
				component={Pharmacies}
				options={{
					title: "",
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

export default PharmaciesStack;
