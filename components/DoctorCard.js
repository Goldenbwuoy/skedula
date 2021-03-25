import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Rating } from "react-native-elements";

const DoctorCard = ({ doctor, navigation, home }) => {
	const navigate = () => {
		if (!home) {
			return navigation.push("DoctorInfo", {
				doctorId: doctor._id,
				name: `Dr ${doctor.lastName}`,
			});
		}
		return navigation.navigate("Doctors", {
			screen: "DoctorInfo",
			params: { doctorId: doctor._id, name: `Dr ${doctor.lastName}` },
		});
	};

	return (
		<Animatable.View animation="zoomIn" style={styles.cardContainer}>
			<TouchableOpacity onPress={navigate}>
				<View style={styles.cardBody}>
					<View style={styles.cardBodyTop}>
						<Image
							style={styles.cardAvatar}
							source={require("../assets/doctor.jpg")}
						/>
						<View style={styles.cardRight}>
							<Text style={styles.cardName}>
								Dr {`${doctor.lastName}`}
							</Text>

							<Text style={styles.cardSpecialty}>
								Dermatologist
							</Text>
						</View>
						<View style={styles.rating}>
							<Rating
								ratingCount={1}
								readOnly
								startingValue={1}
								imageSize={15}
							/>
							<Text style={styles.ratingText}>
								{doctor.overal_rating}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Animatable.View>
	);
};

export default DoctorCard;

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
	},
	cardBodyTop: {
		flexDirection: "row",
	},
	cardAvatar: {
		height: 60,
		width: 50,
		backgroundColor: "gray",
		borderRadius: 10,
	},
	cardRight: {
		paddingHorizontal: 10,
		flex: 1,
	},
	tag: {
		color: "#B066A4",
	},
	cardName: {
		color: "#222",
		fontSize: 15,
		fontWeight: "600",
	},
	cardSpecialty: {
		color: "gray",
		fontSize: 15,
		marginTop: 5,
	},
	rating: {
		paddingVertical: 10,
		position: "absolute",
		bottom: 3,
		right: 10,
		flexDirection: "row",
		alignItems: "center",
	},
	ratingText: {
		marginLeft: 3,
		fontWeight: "600",
	},
});
