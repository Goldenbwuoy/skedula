import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";

const Patients = () => {
	const { colors } = useTheme();

	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.textContainer}>
					<Text>My Patients</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Patients;

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
	textContainer: {
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 20,
	},
});
