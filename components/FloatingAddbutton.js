import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const FloatingAddbutton = () => {
	const navigation = useNavigation();
	return (
		<FAB
			style={styles.fab}
			large
			icon="plus"
			onPress={() => navigation.navigate("Doctors")}
		/>
	);
};

export default FloatingAddbutton;

const styles = StyleSheet.create({
	fab: {
		position: "absolute",
		margin: 16,
		right: 0,
		bottom: 0,
	},
});
