import React from "react";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import { Rating } from "react-native-elements";
import { useTheme, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DoctorInfoHeader = ({ doctor, setOpenModal }) => {
	const { colors } = useTheme();
	const navigation = useNavigation();
	return (
		<View style={[styles.userInfoSection, { backgroundColor: "#0B3454" }]}>
			<View style={{ flexDirection: "row" }}>
				<Image
					style={styles.avatar}
					source={require("../assets/doctor.jpg")}
				/>
				<View style={{ marginLeft: 20 }}>
					<Text style={styles.title}>{`Dr ${doctor.lastName}`}</Text>
					<Text style={styles.caption}>Heart Surgeon</Text>
					<View style={styles.rating}>
						<Rating
							ratingCount={5}
							readOnly
							startingValue={doctor.overal_rating}
							imageSize={15}
							tintColor={colors.card}
						/>
					</View>
					<View style={styles.actions}>
						<TouchableOpacity onPress={() => setOpenModal(true)}>
							{/* <MaterialIcons
								name="add-task"
								size={24}
								color="white"
							/> */}
							<MaterialCommunityIcons
								name="calendar-plus"
								size={24}
								color="white"
							/>
						</TouchableOpacity>
						<TouchableOpacity
						// onPress={() => navigation.navigate("ChatsTab")}
						>
							<Ionicons
								name="chatbubbles"
								size={24}
								color="white"
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default DoctorInfoHeader;

const styles = StyleSheet.create({
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
		color: "#fff",
		marginTop: 8,
		fontFamily: "Montserrat_300Light",
	},
	rating: {
		paddingVertical: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	ratingText: {
		marginLeft: 3,
		fontWeight: "600",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 15,
	},
});
