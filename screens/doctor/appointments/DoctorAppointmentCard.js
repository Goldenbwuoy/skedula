import React, { useState } from "react";
import moment from "moment";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const DoctorAppointmentCard = ({ appointment, navigation }) => {
	const date = moment(appointment?.date).format("ddd MMM Do YYYY");

	const patient = appointment?.patient;

	return (
		<View style={styles.cardContainer}>
			<Animatable.View animation="zoomIn" style={styles.cardBody}>
				<TouchableOpacity>
					<View style={styles.cardBodyTop}>
						<Image
							style={styles.cardAvatar}
							source={require("../../../assets/musk.png")}
						/>
						<View style={styles.cardLeftSide}>
							<Text
								style={styles.cardName}
							>{`${patient?.firstName} ${patient?.lastName}`}</Text>
							<View style={styles.cardTime}>
								<EvilIcons
									name="calendar"
									size={15}
									color="#1c313a"
								/>
								<Text style={styles.cardTimeText}>{date}</Text>
							</View>
							<View style={styles.cardTime}>
								<EvilIcons
									name="clock"
									size={15}
									color="#1c313a"
								/>
								<Text style={styles.cardTimeText}>
									{appointment?.start_time}
								</Text>
							</View>

							<View style={styles.iconMore}>
								<MaterialIcons
									name="read-more"
									size={24}
									color="#1c313a"
								/>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default DoctorAppointmentCard;

const styles = StyleSheet.create({
	cardContainer: {
		padding: 15,
		paddingBottom: 0,
	},
	cardBody: {
		padding: 15,
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		borderWidth: 1,
		borderLeftWidth: 8,
		borderColor: "#009572",
	},
	cardBodyTop: {
		flexDirection: "row",
	},
	cardLeftSide: {
		paddingHorizontal: 10,
		flex: 1,
	},
	cardName: {
		color: "#222",
		fontSize: 15,
		fontWeight: "600",
		fontFamily: "Montserrat_600SemiBold",
	},
	cardTime: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	cardTimeText: {
		color: "#B066A4",
		fontSize: 11,
		fontWeight: "800",
		marginLeft: 5,
		fontFamily: "Montserrat_600SemiBold",
	},
	cardAddressContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	cardAddress: {
		color: "gray",
		fontSize: 13,
		fontWeight: "700",
		marginLeft: 5,
	},
	cardAvatar: {
		height: 80,
		width: 80,
		backgroundColor: "gray",
		borderRadius: 10,
	},
	cardHeaderContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 20,
	},
	cardHeading: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#fff",
	},
	cardMore: {
		fontWeight: "bold",
		color: "rgba(255, 255, 255, 0.7)",
	},
	iconMore: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
	margin: {
		height: 1,
		backgroundColor: "#1c313a",
		width: "100%",
		marginVertical: 10,
	},
	cardBodyBottom: {
		marginTop: 10,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	cardBottomTitle: {
		fontSize: 14,
		marginTop: 5,
	},
	cardGroupIcon: {
		justifyContent: "center",
		alignItems: "center",
	},
});
