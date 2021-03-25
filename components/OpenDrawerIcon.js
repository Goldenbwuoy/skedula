import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AuthContext from "../context/AuthContext";

const OpenDrawerIcon = () => {
	const navigation = useNavigation();
	const { state } = useContext(AuthContext);

	const profileImage =
		state.auth?.user.role === "Patient"
			? require("../assets/musk.png")
			: require("../assets/doctor.jpg");
	return (
		<View style={{ marginHorizontal: 20 }}>
			<TouchableOpacity onPress={() => navigation.openDrawer()}>
				<Avatar.Image source={profileImage} size={35} />
			</TouchableOpacity>
		</View>
	);
};

export default OpenDrawerIcon;
