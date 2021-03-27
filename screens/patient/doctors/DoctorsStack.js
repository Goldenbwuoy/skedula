import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Doctors from "./Doctors";
import { useTheme } from "@react-navigation/native";
import NotificationsIcon from "../../../components/NotificationsIcon";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";
import DoctorInfo from "./DoctorInfo";
import HeaderBackButton from "../../../components/HeaderBackButton";

const Stack = createStackNavigator();

const DoctorsStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					shadowColor: colors.card, //iOS
					elevation: 0, // Android
				},
			}}
		>
			<Stack.Screen
				name="Doctors"
				component={Doctors}
				options={{
					title: "Doctors",
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
			<Stack.Screen
				name="DoctorInfo"
				component={DoctorInfo}
				options={({ route }) => ({
					title: route.params.name,
					headerLeft: () => <HeaderBackButton />,
				})}
			/>
		</Stack.Navigator>
	);
};

export default DoctorsStack;
