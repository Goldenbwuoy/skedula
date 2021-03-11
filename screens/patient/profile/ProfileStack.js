import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import { useTheme } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import { withBadge, Icon } from "react-native-elements";
import { View } from "react-native-animatable";

const Stack = createStackNavigator();

const ProfileStack = ({ navigation }) => {
	const { colors } = useTheme();

	const BadgedIcon = withBadge(5)(Icon);
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
						<View style={{ marginHorizontal: 20 }}>
							<BadgedIcon
								type="ionicon"
								name="notifications-circle-outline"
								size={30}
								color="white"
							/>
						</View>
					),
				}}
			/>
			<Stack.Screen name="EditProfile" component={EditProfile} />
		</Stack.Navigator>
	);
};

export default ProfileStack;
