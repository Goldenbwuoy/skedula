import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native-animatable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "",
					headerStyle: {
						backgroundColor: colors.card,
						shadowColor: colors.card, //iOS
						elevation: 0, // Android
					},
					headerRight: () => (
						<MaterialCommunityIcons
							name="account-edit"
							size={30}
							color="white"
							style={{ marginHorizontal: 20 }}
							onPress={() => navigation.navigate("EditProfile")}
						/>
					),
				}}
			/>
			<Stack.Screen name="EditProfile" component={EditProfile} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
