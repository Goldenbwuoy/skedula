import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ScrollView,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { fetchDoctors } from "../api-patient";
import LoadingScreen from "../../shared/LoadingScreen";
import { Rating } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";

const DoctorCard = ({ doctor, navigation }) => {
	return (
		<Animatable.View animation="zoomIn" style={styles.cardContainer}>
			<TouchableOpacity>
				<View style={styles.cardBody}>
					<View style={styles.cardBodyTop}>
						<Image
							style={styles.cardAvatar}
							source={require("../../../assets/doctor.jpg")}
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
							<Text style={styles.ratingText}>4.5</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</Animatable.View>
	);
};

const Doctors = ({ navigation }) => {
	const { colors } = useTheme();
	const [doctors, setDoctors] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchDoctors()
			.then((data) => {
				setLoading(false);
				if (data && data.error) {
					console.log(data.error);
				} else {
					setDoctors(data);
				}
			})
			.catch((err) => console.log(err));
	}, []);

	if (loading) return <LoadingScreen />;
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<SearchBar
					platform={Platform.OS}
					containerStyle={{
						padding: 10,
						marginHorizontal: 10,
					}}
					placeholder="Search"
				/>
				{doctors.map((doctor) => (
					<DoctorCard
						key={doctor._id}
						doctor={doctor}
						navigation={navigation}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Doctors;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingTop: 10,
		paddingBottom: 20,
	},
	text: {
		fontSize: 20,
		color: "#fff",
	},

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
