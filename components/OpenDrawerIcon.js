import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OpenDrawerIcon = () => {
	const navigation = useNavigation();
	return (
		<View style={{ marginHorizontal: 20 }}>
			<Ionicons
				name="menu"
				size={30}
				color="white"
				onPress={() => navigation.openDrawer()}
			/>
		</View>
	);
};

export default OpenDrawerIcon;
