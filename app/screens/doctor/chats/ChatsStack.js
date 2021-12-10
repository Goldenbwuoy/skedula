import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "@react-navigation/native";
import Chats from "./Chats";
import OpenDrawerIcon from "../../../components/OpenDrawerIcon";
import NotificationsIcon from "../../../components/NotificationsIcon";

const Stack = createStackNavigator();

const ChatsStack = () => {
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
				name="Chats"
				component={Chats}
				options={{
					title: "Chats",
					headerLeft: () => <OpenDrawerIcon />,
					headerRight: () => <NotificationsIcon />,
				}}
			/>
		</Stack.Navigator>
	);
};

export default ChatsStack;
