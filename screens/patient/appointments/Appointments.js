import React, { useContext } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FAB } from "react-native-paper";
import AppointmentCard from "../../../components/AppointmentCard";
import ProfileContext from "../../../context/ProfileContext";
import FloatingAddbutton from "../../../components/FloatingAddbutton";

const Appointments = () => {
	const { colors } = useTheme();
	const {
		profileState: { appointments },
	} = useContext(ProfileContext);

	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView
				style={{
					flex: 1,
					borderTopRightRadius: 25,
					borderTopLeftRadius: 25,
					backgroundColor: "#fff",
				}}
			>
				{appointments?.map((appointment) => (
					<AppointmentCard
						key={appointment._id}
						noHeader
						noFooter
						appointment={appointment}
					/>
				))}
			</ScrollView>
			<FloatingAddbutton />
		</View>
	);
};

export default Appointments;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	fab: {
		position: "absolute",
		margin: 16,
		right: 0,
		bottom: 0,
	},
});
