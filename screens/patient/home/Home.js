import React, { useContext, useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Platform,
	ActivityIndicator,
} from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AuthContex from "../../../context/AuthContext";
import AppointmentCard from "../../../components/AppointmentCard";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import FloatingAddbutton from "../../../components/FloatingAddbutton";
import { topRatedDoctors } from "../api-patient";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import DoctorCard from "../../../components/DoctorCard";

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
	const [fetching, setFetching] = useState(true);
	const [topDoctors, setTopDoctors] = useState([]);
	const { colors } = useTheme();

	const { state } = useContext(AuthContex);
	const {
		profileState: { profile },
	} = useContext(ProfileContext);

	useEffect(() => {
		topRatedDoctors({ token: state.auth?.token }).then((data) => {
			if (data && data.error) {
				console.log(data.error);
			} else {
				setTopDoctors(data);
				setFetching(false);
			}
		});
	}, [state.auth]);
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<Animatable.View
					animation="slideInLeft"
					style={styles.headingContainer}
				>
					<Text style={styles.heading}>
						Hi, {`${profile?.firstName}`}
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
					<Text style={styles.cardHeading}>Top Rated Doctors</Text>
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
						{topDoctors.map((doctor) => (
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
	},
	desc: {
		fontSize: 18,
		fontWeight: "400",
		color: "rgba(0, 0, 0, 0.6)",
		marginTop: 5,
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
	},
	cardMore: {
		color: "rgba(0, 0, 0, 0.7)",
		marginRight: 3,
	},
	loading: {
		padding: 50,
	},
});
