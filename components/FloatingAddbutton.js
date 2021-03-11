import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

const FloatingAddbutton = () => {
	return (
		<FAB
			style={styles.fab}
			large
			icon="plus"
			onPress={() => console.log("Pressed")}
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
