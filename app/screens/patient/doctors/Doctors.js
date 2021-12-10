import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import { fetchDoctors } from "../api-patient";
import LoadingScreen from "../../shared/LoadingScreen";
import { useTheme } from "@react-navigation/native";
import { SearchBar } from "react-native-elements";
import DoctorCard from "../../../components/DoctorCard";

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
});
