import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotificationsIcon = () => {
	return (
		<View style={{ marginHorizontal: 20 }}>
			<TouchableOpacity>
				<Ionicons name="notifications-circle" size={30} color="#fff" />
			</TouchableOpacity>
		</View>
	);
};

export default NotificationsIcon;
