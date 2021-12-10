import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HeaderBackButton = () => {
	const navigation = useNavigation();

	return (
		<Ionicons
			name="chevron-back-circle"
			size={30}
			color="white"
			style={{ marginHorizontal: 20 }}
			onPress={() => navigation.navigate("Doctors")}
		/>
	);
};

export default HeaderBackButton;
