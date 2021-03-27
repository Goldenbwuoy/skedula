import React from "react";
import moment from "moment";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const AppointmentCard = ({ appointment, navigation }) => {
	const date = moment(appointment?.date).format("ddd MMM Do YYYY");

	const doctor = appointment?.doctor;
	return (
		<View style={styles.cardContainer}>
			<Animatable.View animation="zoomIn" style={styles.cardBody}>
				<TouchableOpacity>
					<View style={styles.cardBodyTop}>
						<Image
							style={styles.cardAvatar}
							source={require("../assets/doctor.jpg")}
						/>
						<View style={styles.cardLeftSide}>
							<Text style={styles.cardName}>
								Dr {`${doctor?.lastName}`}
							</Text>
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
							<View style={styles.cardAddressContainer}>
								<EvilIcons
									name="location"
									size={15}
									color="black"
								/>
								<Text style={styles.cardAddress}>
									Address Here!!!!
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

export default AppointmentCard;

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
	},
	cardTime: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 5,
	},
	cardTimeText: {
		color: "#B066A4",
		fontSize: 10,
		fontWeight: "800",
		marginLeft: 5,
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
		// borderWidth: 1,
		// borderColor: "#1c313a",
	},

	iconMore: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
});
