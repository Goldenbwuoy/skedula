import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";
import FloatingAddbutton from "../../../components/FloatingAddbutton";

const Pharmacies = () => {
	const { colors } = useTheme();
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<Text>Pharmacies</Text>
				</View>
			</ScrollView>
			<FloatingAddbutton />
		</View>
	);
};

export default Pharmacies;

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
	},
});
