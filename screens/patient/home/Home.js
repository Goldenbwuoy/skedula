import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	Platform,
} from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AppointmentCard from "../../../components/AppointmentCard";
import * as Animatable from "react-native-animatable";
import { useTheme } from "@react-navigation/native";
import FloatingAddbutton from "../../../components/FloatingAddbutton";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";

const screenWidth = Dimensions.get("window").width;

const Home = ({ navigation }) => {
	const { colors } = useTheme();
	const {
		profileState: { profile, appointments },
	} = useContext(ProfileContext);
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

				<AppointmentCard
					title="Your Next Appointment"
					appointment={appointments[0]}
					navigation={navigation}
				/>
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
});
