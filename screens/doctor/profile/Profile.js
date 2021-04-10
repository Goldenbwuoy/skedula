import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AuthContext from "../../../context/AuthContext";
import ProfileContext from "../../../context/ProfileContext";

const Profile = () => {
	const { state } = useContext(AuthContext);
	const { profileState } = useContext(ProfileContext);

	return (
		<View style={styles.container}>
			<View
				style={[styles.userInfoSection, { backgroundColor: "#0B3454" }]}
			>
				<View style={{ flexDirection: "row" }}>
					<Image
						style={styles.avatar}
						source={require("../../../assets/doctor.jpg")}
					/>
					<View style={{ marginLeft: 20 }}>
						<Text style={styles.title}>
							{`Dr. ${profileState.profile?.lastName}`}
						</Text>
						<Text style={styles.caption}>
							{state.auth?.user.email}
						</Text>
						<Text
							style={styles.caption}
						>{`${profileState.profile?.phoneNumber}`}</Text>
						<Text style={styles.caption}>Zhejiang, China</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	userInfoSection: {
		paddingHorizontal: 20,
		paddingVertical: 20,
		marginBottom: 25,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,
	},
	avatar: {
		width: 100,
		height: 120,
		borderRadius: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: "600",
		color: "#fff",
		fontFamily: "Montserrat_600SemiBold",
	},
	caption: {
		fontSize: 14,
		fontWeight: "500",
		fontFamily: "Montserrat_300Light",
		color: "#fff",
		marginTop: 8,
	},
});
