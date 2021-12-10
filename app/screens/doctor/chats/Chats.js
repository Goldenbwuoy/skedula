import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "@react-navigation/native";

const Chats = () => {
	const { colors } = useTheme();
	return (
		<View style={[styles.container, { backgroundColor: colors.card }]}>
			<ScrollView style={styles.scrollView}>
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<Text>Chats</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default Chats;

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
