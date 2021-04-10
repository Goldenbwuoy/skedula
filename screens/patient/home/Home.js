import React, { useContext, useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Platform,
	ActivityIndicator,
} from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AuthContex from "../../../context/AuthContext";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import FloatingAddbutton from "../../../components/FloatingAddbutton";
import { myDoctors } from "../api-patient";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import DoctorCard from "../../../components/DoctorCard";

const Home = ({ navigation }) => {
	const [fetching, setFetching] = useState(true);
	const [doctors, setDoctors] = useState([]);
	const { colors } = useTheme();

	const { profileState } = useContext(ProfileContext);
	const { state } = useContext(AuthContex);

	useEffect(() => {
		myDoctors(
			{ patientId: profileState.profile?._id },
			{ token: state.auth?.token }
		)
			.then((data) => {
				if (data && data.error) {
					console.log(data.error);
				} else {
					setDoctors(data);
					setFetching(false);
				}
			})
			.catch((err) => console.log(err.message));
	}, [state.auth, profileState.profile]);
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<Animatable.View
					animation="slideInLeft"
					style={styles.headingContainer}
				>
					<Text style={styles.heading}>
						Hi, {`${profileState.profile?.firstName}`}
					</Text>
					<Text style={styles.desc}>Welcome Back</Text>
				</Animatable.View>

				<View>
					<SearchBar
						platform={Platform.OS}
						containerStyle={{ padding: 10 }}
						placeholder="Search"
					/>
				</View>

				<View style={styles.cardHeaderContainer}>
					<Text style={styles.cardHeading}>My Doctors</Text>
					<TouchableOpacity
						onPress={() => navigation.navigate("Doctors")}
						style={{ flexDirection: "row", alignItems: "center" }}
					>
						<Text style={styles.cardMore}>See All</Text>
						<MaterialIcons
							name="read-more"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				</View>

				{fetching ? (
					<View style={styles.loading}>
						<ActivityIndicator />
					</View>
				) : (
					<>
						{doctors.map((doctor) => (
							<DoctorCard
								key={doctor._id}
								doctor={doctor}
								navigation={navigation}
								home={true}
							/>
						))}
					</>
				)}
			</ScrollView>
			<FloatingAddbutton navigation={navigation} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		paddingBottom: 20,
	},
	headingContainer: {
		padding: 20,
		marginTop: 10,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
		color: "rgba(0, 0, 0, 0.7)",
		fontFamily: "Montserrat_700Bold",
	},
	desc: {
		fontSize: 18,
		fontWeight: "400",
		color: "rgba(0, 0, 0, 0.6)",
		marginTop: 5,
		fontFamily: "Montserrat_300Light",
	},
	cardHeaderContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	cardHeading: {
		fontSize: 15,
		fontWeight: "bold",
		color: "rgba(0, 0, 0, 0.7)",
		fontFamily: "Montserrat_700Bold",
	},
	cardMore: {
		color: "rgba(0, 0, 0, 0.7)",
		marginRight: 3,
		fontFamily: "Montserrat_300Light",
	},
	loading: {
		padding: 50,
	},
});
