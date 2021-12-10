import React, { useContext } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import ProfileContext from "../../../context/ProfileContext";
import AuthContext from "../../../context/AuthContext";
import DoctorAppointmentCard from "./DoctorAppointmentCard";
import { useTheme } from "@react-navigation/native";

const Appointments = () => {
	const { colors } = useTheme();
	const {
		profileState: { appointments },
	} = useContext(ProfileContext);
	const {
		state: {
			auth: { token },
		},
	} = useContext(AuthContext);

	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				{appointments?.map((appointment) => (
					<DoctorAppointmentCard
						key={appointment._id}
						noFooter
						noHeader
						appointment={appointment}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Appointments;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		backgroundColor: "#fff",
	},
	text: {
		fontSize: 20,
		color: "#fff",
	},
});
