import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AuthContext from "../../../context/AuthContext";
import ProfileContext from "../../../context/ProfileContext";
import ProfileHeader from "./ProfileHeader";
import { ScrollView } from "react-native-gesture-handler";
import FloatingAddbutton from "../../../components/FloatingAddbutton";

const Profile = ({ navigation }) => {
	const { state } = useContext(AuthContext);
	const { profileState } = useContext(ProfileContext);

	return (
		<View style={styles.container}>
			<ProfileHeader profileState={profileState} state={state} />

			<FloatingAddbutton navigation={navigation} />
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},

	buttonText: {
		color: "grey",
		margin: 15,
	},
});
