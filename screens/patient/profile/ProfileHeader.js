import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileHeader = ({ profileState, state }) => {
	return (
		<View style={[styles.userInfoSection, { backgroundColor: "#0B3454" }]}>
			<View style={{ flexDirection: "row" }}>
				<Image
					style={styles.avatar}
					source={require("../../../assets/musk.png")}
				/>
				<View style={{ marginLeft: 20 }}>
					<Text style={styles.title}>
						{`${profileState.profile?.firstName} ${profileState.profile?.lastName}`}
					</Text>
					<Text style={styles.caption}>{state.auth?.user.email}</Text>
					<Text
						style={styles.caption}
					>{`${profileState.profile?.phoneNumber}`}</Text>
					<Text style={styles.caption}>Zhejiang, China</Text>
				</View>
			</View>
		</View>
	);
};

export default ProfileHeader;

const styles = StyleSheet.create({
	userInfoSection: {
		paddingHorizontal: 20,
		paddingBottom: 20,
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
		fontSize: 20,
		fontWeight: "600",
		color: "#fff",
	},
	caption: {
		fontSize: 14,
		fontWeight: "500",
		color: "#fff",
		marginTop: 8,
	},
});
